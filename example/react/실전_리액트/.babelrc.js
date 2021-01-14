const isDev = (process.env.NODE_ENV = "development");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react",
      {
        development: isDev,
      },
    ],
  ],
};
