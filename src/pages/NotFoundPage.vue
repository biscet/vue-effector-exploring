<script setup lang="ts">
import { pushHistoryFx } from "@/app/providers/models/history";
import { PATHS } from "@/shared/constants/paths";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  pushHistoryFx(PATHS.BASE.PATH);
});
</script>

<template>
  <div class="redirecting">Перенаправляем…</div>
</template>

<style scoped lang="scss">
.redirecting {
  width: 100svw;
  height: 100svh;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 24px;
}
</style>
