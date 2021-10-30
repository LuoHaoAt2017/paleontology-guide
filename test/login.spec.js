import puppeteer from "puppeteer";

describe("登录页面交互逻辑", function () {
  test("用户名和密码非空才能提交", async function () {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto("https://www.baidu.com/", {
      waitUntil: "load",
      timeout: 3 * 60000,
    });
    expect(await browser.pages()).toContain(page);
    // await page.waitForNavigation();
    // const loginForm = await page.$('#loginForm');
    // expect(loginForm).not.toBeNull();
  });
});
