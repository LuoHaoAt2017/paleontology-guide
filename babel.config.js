module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          node: "current",
        },
      },
    ],

  ],
  plugins: [
    [
      "import", 
      { 
        "libraryName": "ant-design-vue", 
        "libraryDirectory": "lib",
        "style": "css"
      }
    ],
  ],
};
