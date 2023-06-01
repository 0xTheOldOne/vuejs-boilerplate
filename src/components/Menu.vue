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
              {{ getLocalizedRouteName(r.name) }}
            </router-link>
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

export default defineComponent({
  name: "Menu",
  data() {
    return {
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
    getLocalizedRouteName(routeName: string) {
      return this.$t("routes." + routeName);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("@/assets/styles/_variables.less");

.menu-container {
  @scale: 0.5;
  @hamburger-width: calc(6.5rem * @scale);
  @hamburger-height: calc(5rem * @scale);
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
        height: 2px;
        width: 100%;
        border-radius: 0.1rem;
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
          @translate: 2px;

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
