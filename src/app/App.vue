<script setup lang="ts">
import type { AppGateType } from "@/app/providers/models/gates/types";
import { useGate } from "effector-vue/composition";
import { AppGate } from "@/app/providers/models/gates/gates";
import { useRouter } from "vue-router";
import { Navigate, NavBar } from "@/entities/components";
import { onMounted, ref } from "vue";

const router = useRouter();

const appMounted = ref(false);

useGate(AppGate, (): AppGateType => {
  const current = router.currentRoute.value;

  return {
    appLoaded: appMounted.value,
    history: {
      name: typeof current.name === "string" ? current.name : "",
      path: current.path,
      params: current.params,
      query: current.query,
    },
  };
});

onMounted(() => {
  appMounted.value = true;
});
</script>

<template>
  <nav-bar />
  <router-view></router-view>
  <navigate />
</template>
