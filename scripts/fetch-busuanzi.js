const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function fetchBusuanziStats() {
  const pageUrl = process.env.SITE_URL || 'https://chanyeesum.github.io/festival-greetings/';

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // 设置超时
    await page.setDefaultTimeout(60000);

    console.log(`Fetching page: ${pageUrl}`);
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 60000 });

    // 等待不蒜子数据加载（最多等待15秒）
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

      // 检查是否获取到有效数据（非空字符串）
      if (pv !== null && uv !== null && pv !== '' && uv !== '' &&
          !isNaN(parseInt(pv, 10)) && !isNaN(parseInt(uv, 10))) {
        console.log('Busuanzi data loaded successfully!');
        break;
      }
    }

    // 解析数据，确保是有效数字
    const pvValue = pv && pv !== '' && !isNaN(parseInt(pv, 10)) ? parseInt(pv, 10) : 0;
    const uvValue = uv && uv !== '' && !isNaN(parseInt(uv, 10)) ? parseInt(uv, 10) : 0;

    // 输出结果
    const result = {
      pv: pvValue,
      uv: uvValue
    };

    // 使用 GITHUB_OUTPUT 环境文件（新版 GitHub Actions）
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `pv=${result.pv}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `uv=${result.uv}\n`);
    }

    // 输出 JSON 格式方便解析
    console.log(`BUSUANZI_JSON=${JSON.stringify(result)}`);
    console.log(`Final result: pv=${result.pv}, uv=${result.uv}`);

    return result;
  } finally {
    await browser.close();
  }
}

function updateStatsFile(pv, uv) {
  const statsPath = path.join(__dirname, '..', 'stats.json');
  const today = new Date().toISOString().split('T')[0];

  const stats = {
    busuanzi: {
      pv: pv,
      uv: uv
    },
    updated_at: today
  };

  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2) + '\n');
  console.log(`Stats file updated: ${statsPath}`);
  console.log(JSON.stringify(stats, null, 2));
}

async function main() {
  try {
    const result = await fetchBusuanziStats();
    updateStatsFile(result.pv, result.uv);
  } catch (err) {
    console.error('Error:', err.message);
    // 即使出错也写入默认值，避免后续脚本失败
    updateStatsFile(0, 0);
  }
}

main();
