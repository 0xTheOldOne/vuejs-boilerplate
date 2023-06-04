<template>
  <div class="component">
    <p>{{ msg }}</p>
    <p>{{ $t("message") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";

export default defineComponent({
  name: "HelloWorld",
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
  text-align: center;
}
</style>
