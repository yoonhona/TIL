const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  'presets': [
    '@babel/preset-env',
    [
      '@babel/preset-react', {
      development: isDevelopment,
    }],
    // https://babeljs.io/docs/en/babel-preset-typescript
    // 
    '@babel/preset-typescript',
  ],
  plugins: [
    // https://styled-components.com/docs/tooling#babel-plugin
    ["babel-plugin-styled-components", {
      displayName: isDevelopment,
      fileName: isDevelopment,
      minify: !isDevelopment
    }]
  ],
}

