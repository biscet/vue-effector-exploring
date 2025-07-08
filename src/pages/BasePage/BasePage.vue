<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import { $postsList } from "@/pages/BasePage/model";

const posts = useStore($postsList);
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    {{ post.body }}
  </div>
</template>
