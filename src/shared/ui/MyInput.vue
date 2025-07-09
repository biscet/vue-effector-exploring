<script setup lang="ts">
import type { Ref } from "vue";
import { computed, useAttrs } from "vue";

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

const restAttrs = useAttrs();
</script>

<template>
  <div class="my-input">
    <input v-model="model" v-bind="restAttrs" />

    <transition name="fade-error">
      <span v-if="errorText" class="error">{{ errorText }}</span>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.my-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input {
    padding: 8px 12px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.2s;
    outline: none;

    &:focus {
      border-color: #1976d2;
    }
  }
}

.error {
  color: #e53935;
  font-size: 13px;
  margin-top: 4px;
}

.fade-error-enter-active,
.fade-error-leave-active {
  transition: opacity 0.2s, max-height 0.2s;
  overflow: hidden;
}
.fade-error-enter-from,
.fade-error-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-error-enter-to,
.fade-error-leave-from {
  opacity: 1;
  max-height: 40px;
}
</style>
