<template>
  <div>
    <h1>Multi-Level Checkbox Example</h1>
    <multi-level-checkbox :structure="structure" :show-ids="true" @change="updateSelectedIds" />
    <span class="badge rounded-pill bg-light text-dark" v-for="id in selectedIds" :key="id">{{ id }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultiLevelCheckbox from "../../components/lib/MultiLevelCheckbox.vue";

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean | "indeterminate";
  children?: CheckboxItem[];
}

export default defineComponent({
  name: "MultiLevelCheckboxView",
  components: { MultiLevelCheckbox },
  data() {
    return {
      structure: [
        {
          id: 1,
          label: "Level 1",
          checked: false,
          children: [
            {
              id: 2,
              label: "Level 1.1",
              checked: false,
              children: [
                {
                  id: 3,
                  label: "Level 1.1.1",
                  checked: false,
                  children: [
                    {
                      id: 4,
                      label: "Level 1.1.1.1",
                      checked: false,
                      children: [
                        {
                          id: 5,
                          label: "Level 1.1.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 6,
              label: "Level 1.2",
              checked: false,
              children: [
                {
                  id: 7,
                  label: "Level 1.2.1",
                  checked: false,
                  children: [
                    {
                      id: 8,
                      label: "Level 1.2.1.1",
                      checked: false,
                      children: [
                        {
                          id: 9,
                          label: "Level 1.2.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 10,
              label: "Level 1.3",
              checked: false,
              children: [
                {
                  id: 11,
                  label: "Level 1.3.1",
                  checked: false,
                  children: [
                    {
                      id: 12,
                      label: "Level 1.3.1.1",
                      checked: false,
                      children: [
                        {
                          id: 13,
                          label: "Level 1.3.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 14,
          label: "Level 2",
          checked: false,
          children: [
            {
              id: 15,
              label: "Level 2.1",
              checked: false,
              children: [
                {
                  id: 16,
                  label: "Level 2.1.1",
                  checked: false,
                  children: [
                    {
                      id: 17,
                      label: "Level 2.1.1.1",
                      checked: false,
                      children: [
                        {
                          id: 18,
                          label: "Level 2.1.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 19,
              label: "Level 2.2",
              checked: false,
              children: [
                {
                  id: 20,
                  label: "Level 2.2.1",
                  checked: false,
                  children: [
                    {
                      id: 21,
                      label: "Level 2.2.1.1",
                      checked: false,
                      children: [
                        {
                          id: 22,
                          label: "Level 2.2.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 23,
              label: "Level 2.3",
              checked: false,
              children: [
                {
                  id: 24,
                  label: "Level 2.3.1",
                  checked: false,
                  children: [
                    {
                      id: 25,
                      label: "Level 2.3.1.1",
                      checked: false,
                      children: [
                        {
                          id: 26,
                          label: "Level 2.3.1.1.1",
                          checked: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ] as CheckboxItem[],
      selectedIds: [] as number[],
      selectedItems: [],
    };
  },
  methods: {
    updateSelectedIds() {
      const getCheckedIds = (items: CheckboxItem[]): number[] =>
        items.flatMap((item) => {
          if (item.checked === true || item.checked === "indeterminate") {
            const childrenIds = item.children ? getCheckedIds(item.children) : [];
            return [item.id, ...childrenIds];
          }
          return item.children ? getCheckedIds(item.children) : [];
        });

      this.selectedIds = getCheckedIds(this.structure);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.badge {
  margin-right: 0.25rem;
}
</style>
