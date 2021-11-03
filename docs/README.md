- jest-puppeteer
提供全局的 browser, page, context。
没有必要手动创建 browser, page。
可以调试 await jestPuppeteer.debug()。

- expect-puppeteer
编写集成测试可以使用 Puppeteer API 来完成，但它可能既复杂又困难。
Puppeteer API 很棒，但它是低级的，不是为集成测试而设计的。
