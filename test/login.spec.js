import puppeteer from "puppeteer";

describe("登录页面交互逻辑", function () {
  test("用户名和密码非空才能提交", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:9090/login.html");
    expect(await browser.pages()).toContain(page);
    page.on('load', async () => {
      const loginForm = await page.$('#loginForm');
      expect(loginForm).not.toBeNull();
      const username = await page.$('.ant-form-item:nth-child(1)');
      const password = await page.$('.ant-form-item:nth-child(2)');
      await page.focus(username);
      await page.keyboard.type('luohao'); // text to type into a focused element.
      await page.focus(password);
      await page.keyboard.type('123456'); // text to type into a focused element.
      const btnElem = await page.$("button[type='submit']");
      expect(btnElem.getAttribute("disabled")).toBe("disabled");
      await page.close();
      // await browser.close();
    });
  });
});
