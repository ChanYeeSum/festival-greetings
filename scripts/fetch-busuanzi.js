const puppeteer = require('puppeteer');

async function fetchBusuanziStats() {
  const pageUrl = process.env.SITE_URL || 'https://chanyeesum.github.io/festival-greetings/';
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // 设置超时
    await page.setDefaultTimeout(30000);
    
    console.log(`Fetching page: ${pageUrl}`);
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
    
    // 等待不蒜子数据加载（最多等待10秒）
    let pv = null;
    let uv = null;
    
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      pv = await page.$eval('#busuanzi_value_site_pv', el => el.textContent).catch(() => null);
      uv = await page.$eval('#busuanzi_value_site_uv', el => el.textContent).catch(() => null);
      
      console.log(`[${i + 1}s] PV: ${pv}, UV: ${uv}`);
      
      if (pv && uv && pv !== '' && uv !== '') {
        console.log('Busuanzi data loaded successfully!');
        break;
      }
    }
    
    // 输出结果供 GitHub Actions 读取
    const result = {
      pv: pv ? parseInt(pv, 10) : 0,
      uv: uv ? parseInt(uv, 10) : 0
    };
    
    console.log(`::set-output name=pv::${result.pv}`);
    console.log(`::set-output name=uv::${result.uv}`);
    
    // 输出 JSON 格式方便解析
    console.log(`BUSUANZI_JSON=${JSON.stringify(result)}`);
    
    return result;
  } finally {
    await browser.close();
  }
}

fetchBusuanziStats().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
