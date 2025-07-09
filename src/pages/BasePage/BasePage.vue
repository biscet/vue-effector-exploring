<script setup lang="ts">
import { useUnit } from "effector-vue/composition";
import {
  $isLoadingPosts,
  $postsList,
  $postsPage,
  $totalPostsPageCount,
  changePostsPageFn,
} from "@/pages/BasePage/model";
import PaginationBase from "@/entities/components/PaginationBase.vue";

const [
  postsList,
  changePostsPage,
  postsPage,
  totalPostsPageCount,
  isLoadingPosts,
] = useUnit([
  $postsList,
  changePostsPageFn,
  $postsPage,
  $totalPostsPageCount,
  $isLoadingPosts,
]);
</script>

<template>
  <div class="base-page">
    <div class="base-page__header">
      <h1 class="base-page__title">Посты</h1>
    </div>

    <div class="base-page__content">
      <div v-if="isLoadingPosts" class="base-page__loader">
        <span class="loader"></span>
      </div>
      <div v-else class="base-page__posts-wrapper">
        <div v-for="post in postsList" :key="post.id" class="base-page__post">
          <h2 class="base-page__post-title">{{ post.title }}</h2>
          <p class="base-page__post-body">{{ post.body }}</p>
        </div>
      </div>
    </div>

    <div class="base-page__footer">
      <pagination-base
        :current-page="postsPage"
        :total-pages="totalPostsPageCount"
        @change-page="changePostsPage"
        class="base-page__pagination"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
  background: #23272f;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    padding: 24px 24px 0 24px;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
    color: #e0e0e0;
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    padding: 24px;
    overflow-y: auto;
  }

  &__posts-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120px;
    width: 100%;
  }

  &__post {
    background: #23272f;
    border-radius: 8px;
    padding: 18px 20px;
    margin-bottom: 18px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #23272f;
  }

  &__post-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #90caf9;
  }

  &__post-body {
    font-size: 1rem;
    color: #e0e0e0;
  }

  &__footer {
    padding: 0 24px 24px 24px;
  }

  &__pagination {
    margin-top: 0;
    display: flex;
    justify-content: center;
  }
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #1976d2;
  border-top: 4px solid #444b58;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
