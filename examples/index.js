const puppeteer = require("puppeteer");

(async function() {
  /*************************************** init ***************************************************/
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 640,
    height: 640
  });
  /************************************** eval ****************************************************/
  await page.goto("https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios");
  // page.$eval(selector, pageFunction[, ...args]);
  const checkboxStatus = await page.$eval('#defaultCheck1', (checkbox) => checkbox.checked);
  console.log('Checkbox checked status:', checkboxStatus);
  // page.$$eval(selector, pageFunction[, ...args]);
  const radios = await page.$$eval('input[name=exampleRadios]', function(elems) {
    return elems.map(elem => elem.value);
  });
  console.table(radios);
  /*************************************** tracing ***************************************************/
  page.tracing.start({
    path: 'assets/json/trace.json',
    categories: ['devtools.timeline']
  });
  await page.goto("https://news.ycombinator.com/news");
  await page.$$eval('a.titlelink', (elems) => elems.map((elem) => elem.textContent).slice(0, 20));
  await page.tracing.stop();
  /*************************************** hover ***************************************************/
  await page.goto('https://soundcloud.com/');
  await page.hover('.playableTile__artwork');
  await page.screenshot({ path: './assets/img/hover.png' });
  /*************************************** destory ***************************************************/
  await browser.close();
})()