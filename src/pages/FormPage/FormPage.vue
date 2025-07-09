<script setup lang="ts">
import { makeInputBinder, useForm } from "effector-forms-vue";
import { userForm } from "./model";

const form = useForm(userForm);
</script>

<template>
  <form @submit.prevent="form.submit" class="form">
    <h1 class="form__title">Аунтификация</h1>

    <my-input v-bind="makeInputBinder(form, 'name')" placeholder="Имя" />
    <my-input v-bind="makeInputBinder(form, 'email')" placeholder="Email" />

    <my-button type="submit">Вход</my-button>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #23272f;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.32);
  gap: 12px;

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 24px;
  }
}
</style>
