// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  modules: ["nuxt-windicss"],
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({ resolveIcons: true, importStyle: "less" })
        ]
      })
    ],
    ssr: {
      noExternal: ["ant-design-vue", "@ant-design/icons-vue"]
    }
  }
});
