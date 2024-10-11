const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ski-tracking-simulation/' // Replace <REPO_NAME> with your GitHub repo name
    : '/'
})
