<script setup lang="ts">
import { useUnit } from "effector-vue/composition";
import {
  $isLoadingPosts,
  $postsList,
  $postsPage,
  changePostsPageFn,
} from "@/pages/BasePage/model";

const [postsList, changePostsPage, postsPage, isLoadingPosts] = useUnit([
  $postsList,
  changePostsPageFn,
  $postsPage,
  $isLoadingPosts,
]);
</script>

<template>
  <div v-for="post in postsList" :key="post.id">
    {{ post.body }}
  </div>
  <button @click="changePostsPage(postsPage + 1)" :disabled="isLoadingPosts">
    next
  </button>
</template>
