module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuejs-boilerplate/" : "/",

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "VueJs Boilerplate";
      return args;
    });
  },
};
