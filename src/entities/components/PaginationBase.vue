<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "change-page", page: number): void;
}>();

const pages = computed(() => {
  const arr = [];
  for (let i = 1; i <= props.totalPages; i++) arr.push(i);
  return arr;
});

function goTo(page: number) {
  if (page !== props.currentPage && page >= 1 && page <= props.totalPages) {
    emit("change-page", page);
  }
}
</script>

<template>
  <div class="pagination-base">
    <my-button
      type="button"
      class="pagination-base__btn"
      :disabled="props.currentPage === 1"
      @click="goTo(props.currentPage - 1)"
    >
      Назад
    </my-button>
    <my-button
      v-for="page in pages"
      :key="page"
      class="pagination-base__page"
      :class="{ active: page === props.currentPage }"
      @click="goTo(page)"
      :disabled="page === props.currentPage"
      type="button"
    >
      {{ page }}
    </my-button>
    <my-button
      type="button"
      class="pagination-base__btn"
      :disabled="props.currentPage === props.totalPages"
      @click="goTo(props.currentPage + 1)"
    >
      Вперёд
    </my-button>
  </div>
</template>
<style scoped lang="scss">
.pagination-base {
  display: flex;
  gap: 8px;
  align-items: center;

  &__btn {
    min-width: 70px;
  }

  &__page {
    background: none;
    border: 1px solid #1976d2;
    color: #1976d2;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;

    &.active,
    &:disabled {
      background: #1976d2;
      color: #fff;
      cursor: default;
    }

    &:not(:disabled):hover {
      background: #e3f2fd;
    }
  }
}
</style>
