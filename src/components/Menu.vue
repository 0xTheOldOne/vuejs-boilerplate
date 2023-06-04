<template>
  <div class="menu-container">
    <div class="menu-input" :title="$t('pages.menu.title')">
      <input class="checkbox" type="checkbox" name="" id="" v-model="checked" />
      <div class="lines" :class="{ checked: checked }">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
    <div class="menu" :class="{ show: checked }">
      <h1>{{ $t("pages.menu.title") }}</h1>
      <div class="separator"></div>
      <router-link v-for="r in routes" :key="r.path" :to="r.path" @click="toggleChecked()">
        {{ r.name ? getLocalizedRouteName(r.name) : "" }}
      </router-link>

      <div class="stick-to-end">
        <I18nLocaleSwitcher />
        <div class="version">
          Version <code>{{ version }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import packageJson from "../../package.json";
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";
import { RouteRecordName } from "vue-router";
import I18nLocaleSwitcher from "@/components/I18nLocaleSwitcher.vue";

export default defineComponent({
  name: "Menu",
  components: { I18nLocaleSwitcher },
  data() {
    return {
      version: packageJson.version,
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
      checked: false,
    };
  },
  setup() {},
  computed: {
    routes() {
      return this.$router.getRoutes();
    },
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
    getLocalizedRouteName(routeName: RouteRecordName | undefined) {
      return this.$t("routes." + routeName?.toString());
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("@/assets/styles/_variables.less");

.menu-container {
  @hamburger-width: 2.5rem;
  @hamburger-height: 2rem;
  @line-height: 2px;
  width: 100%;

  .menu-input {
    position: absolute;
    display: block;
    width: @hamburger-width;
    height: @hamburger-height;
    top: 1rem;
    right: 1rem;
    z-index: 500;

    .checkbox {
      position: absolute;
      display: block;
      width: @hamburger-width;
      height: @hamburger-height;
      z-index: 1;
      opacity: 0;
      cursor: pointer;
    }

    .lines {
      display: block;
      width: @hamburger-width;
      height: @hamburger-height;
      position: absolute;
      z-index: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .line {
        display: block;
        height: @line-height;
        width: 100%;
        border-radius: @line-height;
        background-color: @text-primary-color;
        transition: transform 0.5s ease-in-out;

        &.line1 {
          transition: transform 0.5s ease-in-out;
          transform-origin: top right;
        }

        &.line2 {
          transition: transform 0.25s ease-in-out;
        }

        &.line3 {
          transform-origin: bottom right;
          transition: transform 0.5s ease-in-out;
        }
      }

      &.checked {
        padding-right: calc((@hamburger-width - @hamburger-height) / 2);

        .line {
          @degrees: 45deg;
          @translate: (-1 * @line-height - 1px);

          &.line1 {
            transform: rotate(-@degrees) translate(@translate);
          }

          &.line2 {
            transform: scaleY(0);
          }

          &.line3 {
            transform: rotate(@degrees) translate(@translate);
          }
        }
      }
    }
  }

  .menu {
    @blur: 10px;
    display: none;
    transition: all ease-in-out 0.5s;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 499;
    padding: 1rem;
    background-color: @background-color;

    &.show {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .stick-to-end {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: auto;
      }
    }

    .separator {
      height: 1rem;
    }

    .version {
      text-align: center;
    }

    a {
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      color: @text-primary-color;
    }
  }
}
</style>
