const tailwind = require('tailwindcss')

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://widhiw.github.io',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }
}