<script setup lang="ts">
import type { Ref } from "vue";
import { computed } from "vue";

defineOptions({ name: "my-input" });

type Fields = Record<
  string,
  {
    value: Ref<any>;
    firstError: Ref<{ errorText?: string } | null>;
  }
>;

const props = defineProps<{
  fields: Fields;
  name: keyof Record<string, Ref<any>> & keyof Fields;
}>();

const model = defineModel("modelValue", { required: true });

const errorText = computed(
  () => props.fields[props.name].firstError.value?.errorText ?? ""
);
</script>

<template>
  <div class="my-input">
    <input v-model="model" />
    <span v-if="errorText" class="error">{{ errorText }}</span>
  </div>
</template>
