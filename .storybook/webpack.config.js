const path = require("path")
const rescriptsConfig = require("../.rescriptsrc.js")
const handleExtensions = rescriptsConfig.webpack

module.exports = function({ config }) {
  let newConfig = { ...config }
  newConfig.resolve.modules = [path.resolve("src"), "node_modules"]

  newConfig = handleExtensions(config)
  newConfig.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  })

  return newConfig
}
