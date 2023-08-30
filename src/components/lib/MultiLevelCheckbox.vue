<template>
  <ul :class="{ disabled: disabled }">
    <li v-for="item in structure" :key="item.id">
      <label :class="{ 'align-right': alignCheckboxesToRight }" :for="'item-' + item.id">
        <template v-if="showCheckboxes">
          <input type="checkbox" :id="'item-' + item.id" :disabled="disabled" :indeterminate="item.checked == 'indeterminate'" v-model="item.checked" @change="toggleChildrenRecursive(item)" />
        </template>
        {{ item.label }}
        <template v-if="showIds">
          &nbsp;<code>({{ item.id }})</code>
        </template>
      </label>

      <multi-level-checkbox v-if="item.children && item.children?.length > 0" :structure="item.children" :show-ids="showIds" :show-checkboxes="showCheckboxes" :align-right="alignCheckboxesToRight" @change="childItemChanged" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean | "indeterminate";
  children?: CheckboxItem[];
}

export default defineComponent({
  name: "MultiLevelCheckbox",
  emits: ["change"],
  props: {
    structure: {
      type: Array as PropType<CheckboxItem[]>,
      required: true,
    },
    showCheckboxes: {
      type: Boolean,
      default: true,
    },
    showIds: {
      type: Boolean,
      default: false,
    },
    alignCheckboxesToRight: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleChildrenRecursive(item: CheckboxItem) {
      if (item.children) {
        item.children.forEach((child) => {
          child.checked = item.checked;
          this.toggleChildrenRecursive(child);
        });
      }

      this.$emit("change", item);
    },
    childItemChanged(item: CheckboxItem) {
      var changedItem = undefined;

      if (item) {
        var parentItem = this.structure.find((child) => child.children?.some((c) => c.id === item.id));
        if (parentItem) {
          const allChecked = parentItem.children?.every((child) => child.checked === true);
          const allUnchecked = parentItem.children?.every((child) => child.checked === false);

          parentItem.checked = allChecked ? true : allUnchecked ? false : "indeterminate";

          changedItem = parentItem;
        }
      }

      if (changedItem != undefined) {
        this.$emit("change", changedItem);
      } else {
        this.$emit("change");
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("@/assets/styles/_variables.less");
@checkbox-size: 1.2rem;

* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

ul {
  list-style: none;
  padding-left: 0;

  li {
    label {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      // border-top: 1px solid currentColor;
      // border-bottom: 1px solid currentColor;

      input[type="checkbox"] {
        background-color: #fff;
        margin: 0;
        margin-top: 4px;
        margin-bottom: 2px;
        margin-right: 1rem;

        font: inherit;
        color: currentColor;
        width: @checkbox-size;
        height: @checkbox-size;
        border: 1px solid currentColor;
        border-radius: 4px;
        transform: translateY(-0.075rem);
      }

      &.align-right {
        justify-content: space-between;

        input[type="checkbox"] {
          margin-right: 0;
          margin-left: auto;
          order: 2;
        }
      }
    }

    ul {
      padding-left: 1.5rem;
    }
  }

  &.disabled {
    * {
      color: @text-disabled-color;
      cursor: not-allowed;
    }
  }
}
</style>
