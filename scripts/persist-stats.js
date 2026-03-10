const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const STATS_FILE = path.join(__dirname, '..', 'stats.json');

/**
 * 爬取不蒜子 PV/UV 统计
 */
async function fetchBusuanziStats() {
  const pageUrl = process.env.SITE_URL || 'https://chanyeesum.github.io/festival-greetings/';

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setDefaultTimeout(60000);

    console.log(`Fetching page: ${pageUrl}`);
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 60000 });

    let pv = null;
    let uv = null;
    let retries = 0;
    const maxRetries = 15;

    while (retries < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      retries++;

      try {
        pv = await page.$eval('#busuanzi_value_site_pv', el => el.textContent);
        uv = await page.$eval('#busuanzi_value_site_uv', el => el.textContent);
      } catch (e) {
        console.log(`[${retries}s] Elements not found yet, waiting...`);
        continue;
      }

      console.log(`[${retries}s] PV: "${pv}", UV: "${uv}"`);

      if (pv !== null && uv !== null && pv !== '' && uv !== '' &&
          !isNaN(parseInt(pv, 10)) && !isNaN(parseInt(uv, 10))) {
        console.log('Busuanzi data loaded successfully!');
        break;
      }
    }

    const pvValue = pv && pv !== '' && !isNaN(parseInt(pv, 10)) ? parseInt(pv, 10) : 0;
    const uvValue = uv && uv !== '' && !isNaN(parseInt(uv, 10)) ? parseInt(uv, 10) : 0;

    const result = { pv: pvValue, uv: uvValue };

    // 使用 GITHUB_OUTPUT 环境文件（GitHub Actions）
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `pv=${result.pv}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `uv=${result.uv}\n`);
    }

    console.log(`BUSUANZI_JSON=${JSON.stringify(result)}`);
    console.log(`Final result: pv=${result.pv}, uv=${result.uv}`);

    return result;
  } finally {
    await browser.close();
  }
}

/**
 * 加载历史数据
 */
function loadHistory() {
  if (!fs.existsSync(STATS_FILE)) {
    return { history: {}, latest: { pv: 0, uv: 0 }, updated_at: null };
  }

  try {
    const data = fs.readFileSync(STATS_FILE, 'utf-8');
    const stats = JSON.parse(data);

    // 兼容旧格式
    if (!stats.history) {
      // 如果有旧的 updated_at 和 busuanzi 数据，迁移到 history
      const history = {};
      if (stats.updated_at && stats.busuanzi) {
        history[stats.updated_at] = {
          pv: stats.busuanzi.pv,
          uv: stats.busuanzi.uv,
          time: new Date(stats.updated_at).toISOString()
        };
      }
      return {
        history,
        latest: stats.busuanzi || { pv: 0, uv: 0 },
        updated_at: stats.updated_at
      };
    }

    return stats;
  } catch (error) {
    console.error('Error loading history:', error.message);
    return { history: {}, latest: { pv: 0, uv: 0 }, updated_at: null };
  }
}

/**
 * 保存历史数据
 */
function saveHistory(data) {
  fs.writeFileSync(STATS_FILE, JSON.stringify(data, null, 2) + '\n');
  console.log(`Stats file updated: ${STATS_FILE}`);
}

/**
 * 获取当前日期字符串
 */
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * 获取当前时间 ISO 字符串
 */
function getCurrentTime() {
  return new Date().toISOString();
}

/**
 * 主函数
 */
async function main() {
  try {
    const today = getTodayDate();
    const currentTime = getCurrentTime();

    console.log(`Today's date: ${today}`);
    console.log('Starting to fetch busuanzi stats...');

    // 爬取数据
    const stats = await fetchBusuanziStats();

    // 加载历史数据
    const data = loadHistory();

    // 更新当天数据（增量更新）
    data.history[today] = {
      pv: stats.pv,
      uv: stats.uv,
      time: currentTime
    };

    // 更新 latest 和 updated_at
    data.latest = {
      pv: stats.pv,
      uv: stats.uv
    };
    data.updated_at = currentTime;

    // 保存数据
    saveHistory(data);

    console.log('\n=== Final Data ===');
    console.log(JSON.stringify(data, null, 2));

  } catch (err) {
    console.error('Error:', err.message);
    // 即使出错也保存现有数据，避免数据丢失
    const data = loadHistory();
    data.latest = { pv: 0, uv: 0 };
    data.updated_at = getCurrentTime();
    saveHistory(data);
    process.exit(1);
  }
}

main();