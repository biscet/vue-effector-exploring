<script setup lang="ts">
import { useAttrs } from "vue";

defineOptions({ name: "my-button" });

const props = defineProps<{
  type: "button" | "submit" | "reset";
}>();

const restAttrs = useAttrs();
</script>

<template>
  <button class="my-button" v-bind="restAttrs" :type="props.type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.my-button {
  padding: 10px 0;
  background: #1976d2;
  color: #e0e0e0;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }

  &:active {
    background: #0d47a1;
  }
}
</style>
