<script setup lang="ts">
import { makeInputBinder, useForm } from "effector-forms-vue";
import { userForm } from "./model";

const form = useForm(userForm);
</script>

<template>
  <form @submit.prevent="form.submit">
    <my-input v-bind="makeInputBinder(form, 'name')" />
    <my-input v-bind="makeInputBinder(form, 'email')" />

    <button type="submit">submit</button>
  </form>
</template>
