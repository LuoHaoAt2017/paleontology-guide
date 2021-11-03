module.exports = {
  launch: {
    headless: false,
    args: [],
    // args: ["--user-data-dir=RunData", "--start-maximized"],
    slowMo: 20,
    delay: 100,
  },
  browser: "chrome",
  browserContext: "default",
};
