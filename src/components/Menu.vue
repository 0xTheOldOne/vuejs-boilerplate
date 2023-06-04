<template>
  <div class="menu-container">
    <div class="menu-input">
      <input class="checkbox" type="checkbox" name="" id="" v-model="checked" />
      <div class="lines" :class="{ checked: checked }">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
    <div class="menu" :class="{ show: checked }">
      <div class="container">
        <div class="row" v-for="r in routes" :key="r.path">
          <div class="col">
            <router-link :to="r.path" @click="toggleChecked()">
              {{ r.name ? getLocalizedRouteName(r.name) : "" }}
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col separator"></div>
        </div>
        <div class="row">
          <div class="col">
            <I18nLocaleSwitcher />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
        border-radius: calc(@line-height / 2);
        background-color: @md-text-primary-color;

        &.line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4s ease-in-out;
        }

        &.line2 {
          transition: transform 0.2s ease-in-out;
        }

        &.line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4s ease-in-out;
        }
      }

      &.checked {
        .line {
          @degrees: 45deg;
          @translate: @line-height;

          &.line1 {
            transform: rotate(@degrees) translate(@translate);
          }

          &.line2 {
            transform: scaleY(0);
          }

          &.line3 {
            transform: rotate(-@degrees) translate(@translate);
          }
        }
      }
    }
  }

  .menu {
    @blur: 10px;
    display: none;
    transition: all ease-in-out 1s;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 499;
    padding: 1rem;

    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(@blur);
    -webkit-backdrop-filter: blur(@blur);

    &.show {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .separator {
      height: 1rem;
    }

    a {
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      color: @md-text-primary-color;
    }
  }
}
</style>
