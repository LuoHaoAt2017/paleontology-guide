describe('puppeteer 入门测试', () => {
  test('hello world', async () => {
    await page.goto("https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios");
    const checkboxStatus = await page.$eval('#defaultCheck1', (checkbox) => checkbox.checked);
    expect(checkboxStatus).toBeFalsy();
  });

  test("选中多个控件", async () => {
    await page.goto("https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios");
    const radios = await page.$$eval('input[name=exampleRadios]', (elems) => elems.map(elem => elem.value));
    expect(radios.length).toBeGreaterThan(1);
  });
});