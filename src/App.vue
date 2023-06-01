<template>
  <Menu />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { getSupportedLocales } from "./locales/helper";
import { getBrowserLocale } from "./locales/helper";
import Menu from "./components/Menu.vue";

export default defineComponent({
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
    };
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
  mounted() {
    if (this.browserLocale) {
      this.$i18n.locale = this.browserLocale;
    }
  },
});
</script>

<style lang="less">
@import "@/assets/styles/app.less";
</style>
