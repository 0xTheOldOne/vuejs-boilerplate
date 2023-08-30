<template>
  <div class="sidebar" :class="{ show: checked }">
    <router-link v-for="r in routes" :key="r.path" :to="r.path" :class="{ active: isActiveRoute(r.name) }">
      {{ r.name ? getLocalizedRouteName(r.name) : "" }}
    </router-link>
    <div class="stick-to-end">
      <router-link to="">
        <I18nLocaleSwitcher />
      </router-link>
      <router-link to="" class="version">
        Version <code>{{ version }}</code>
      </router-link>
    </div>
  </div>

  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="route-name">
            {{ getLocalizedRouteName($route.name) }}

            <div class="sidebar-toggle" :class="{ checked: checked }">
              <input class="checkbox" type="checkbox" name="" id="" v-model="checked" />
              <div class="lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </div>
          </h1>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import packageJson from "../package.json";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { getSupportedLocales } from "./locales/helper";
import { getBrowserLocale } from "./locales/helper";
import { RouteRecordName } from "vue-router";
import I18nLocaleSwitcher from "@/components/I18nLocaleSwitcher.vue";

export default defineComponent({
  name: "App",
  components: { I18nLocaleSwitcher },
  data() {
    return {
      version: packageJson.version,
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
      checked: true,
    };
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
  mounted() {
    if (this.browserLocale) {
      this.$i18n.locale = this.browserLocale;
    }

    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("lang", this.$i18n.locale);
    }
  },
  computed: {
    routes() {
      return this.$router.getRoutes();
    },
  },
  methods: {
    isActiveRoute(routeName: RouteRecordName | undefined) {
      return this.$route.name == routeName;
    },
    getLocalizedRouteName(routeName: RouteRecordName | null | undefined) {
      return this.$t("routes." + routeName?.toString());
    },
  },
  watch: {
    $route(to, from) {
      this.checked = false;
    },
  },
});
</script>

<style lang="less">
@import "@/assets/styles/_variables.less";

@sidebar-width: 250px;
@sidebar-color: @md-blue-grey-700;
@hamburger-width: 2rem;
@hamburger-height: 1.5rem;
@line-height: 2px;

html,
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;

  #app {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: @background-color;

    font-size: 14px;
    color: @text-primary-color;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    flex-direction: row;

    code,
    pre {
      font-family: "Roboto Mono", monospace;
    }

    img {
      max-width: 100%;
    }

    .sidebar-toggle {
      display: none;
      position: absolute;
      width: @hamburger-width;
      height: @hamburger-height;
      top: 1.5rem;
      right: 0rem;
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
      }

      &.checked {
        width: @hamburger-height;
        height: @hamburger-height;
        right: 0.25rem;

        .lines {
          padding-right: calc((@hamburger-width - @hamburger-height) / 2 + @line-height / 2);

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

    .sidebar {
      margin: 0;
      padding: 0;
      min-width: @sidebar-width;
      max-width: @sidebar-width;
      display: flex;
      flex-direction: column;
      border: 0px solid @sidebar-color;
      border-right-width: 1px;

      a {
        display: block;
        color: currentColor;
        padding: 1rem;
        text-decoration: none;

        &.active {
          background-color: @sidebar-color;
        }

        &:hover:not(.active) {
          background-color: @text-disabled-color;
        }
      }

      .stick-to-end {
        margin-top: auto;

        a {
          padding: 0 1rem 1rem 1rem;

          &:hover {
            background-color: initial;
          }
        }
      }
    }

    .content {
      padding: 1rem;
      width: 100%;
      height: 100%;

      .route-name {
        position: relative;
        padding: 1rem 0;
        margin: 0;
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 960px) {
      flex-direction: column;

      .sidebar-toggle {
        display: block;
      }

      .sidebar {
        min-width: 100%;
        max-width: 100%;
        border-right-width: 0px;
        border-bottom-width: 1px;

        height: 0;
        opacity: 0;
        visibility: hidden;
        transition: visibility 0s, opacity 1s ease-in-out;

        &.show {
          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
