<template>
  <div class="view">This is a template view</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "../locales/helper";
import { getBrowserLocale } from "../locales/helper";

export default defineComponent({
  name: "TemplateView",
  components: {},
  data() {
    return {};
  },
  setup() {},
  computed: {},
  methods: {},
});
</script>

<style scoped lang="less">
@import url("@/assets/styles/_variables.less");

.view {
}
</style>
