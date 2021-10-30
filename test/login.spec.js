import puppeteer from 'puppeteer';

describe("登录页面交互逻辑", function() {

  test("用户名和密码非空才能提交", async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:9090/login.html#/login");
    expect(await browser.pages()).toContain(page);
    await page.waitForNavigation();
    const loginForm = await page.$('#loginForm');
    expect(loginForm).not.toBeNull();
  });
});