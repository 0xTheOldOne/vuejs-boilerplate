<template>
  <div class="view">
    <HelloWorld :msg="$t('message')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
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
