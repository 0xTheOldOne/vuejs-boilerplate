<template>
  <div class="component">
    <div class="logo">
      <img src="favicon.png" />
      <h1>VueJS boilerplate</h1>
    </div>
    <p>{{ msg }}</p>
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
  .logo {
    padding: 5rem 0;
    text-align: center;

    img {
      margin-bottom: 2rem;
      max-width: 75% !important;
    }
  }
}
</style>
