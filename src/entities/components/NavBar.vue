<script setup lang="ts">
import { pushHistoryFx } from "@/app/providers/models/history";
import { PATHS } from "@/shared/constants/paths";
</script>

<template>
  <button @click="pushHistoryFx(PATHS.BASE.PATH)">BASED</button>
  <button @click="pushHistoryFx(PATHS.FORM.PATH)">FORM</button>
</template>
