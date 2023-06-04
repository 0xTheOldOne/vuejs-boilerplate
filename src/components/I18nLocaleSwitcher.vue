<template>
  <div class="component">
    <img class="locale" :src="'https://flagcdn.com/w20/' + currentLocale.flag + '.png'" :srcset="'https://flagcdn.com/w40/' + currentLocale.flag + '.png 2x'" width="20" :alt="currentLocale.name" />
    <select v-model="$i18n.locale" @change="changeLang">
      <option v-for="locale in locales" :value="locale.code" class="locale">{{ locale.name }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";

export default defineComponent({
  name: "TemplateComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
    };
  },
  setup() {},
  computed: {
    currentLocale() {
      return this.locales.find((l) => l.code == this.$i18n.locale) ?? { code: "en", name: "English", flag: "gb" };
    },
  },
  methods: {
    changeLang() {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("lang", this.$i18n.locale);
      }
    },
  },
});
</script>

<style scoped lang="less">
@import url("@/assets/styles/_variables.less");

.component {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: initial;

  .locale {
    height: 1rem;
    margin-right: 0.5rem;
    vertical-align: bottom;
    line-height: 1rem;
  }

  select {
    width: 100%;
  }
}
</style>
