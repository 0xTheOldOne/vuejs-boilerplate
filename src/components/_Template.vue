<template>
  <div class="component">
    This is a template component with a <code>msg</code> property and i18n :<br />
    {{ msg }}<br />
    {{ $t("message") }}
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
  computed: {},
  methods: {},
});
</script>

<style scoped lang="less">
@import url("@/assets/styles/_variables.less");

.component {
  text-align: initial;
}
</style>
