<script setup lang="ts">
import { pushHistoryFx } from "@/app/providers/models/history";
import { PATHS } from "@/shared/constants/paths";
import { useRoute } from "vue-router";
import MyButton from "@/shared/ui/MyButton.vue";

const route = useRoute();

function isActive(path: string) {
  return route.path === path;
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">EffectorApp</div>
      <div class="navbar__links">
        <my-button
          type="button"
          class="navbar__btn"
          :class="{ 'navbar__btn--active': isActive(PATHS.BASE.PATH) }"
          @click="pushHistoryFx(PATHS.BASE.PATH)"
          >Главная</my-button
        >
        <my-button
          type="button"
          class="navbar__btn"
          :class="{ 'navbar__btn--active': isActive(PATHS.FORM.PATH) }"
          @click="pushHistoryFx(PATHS.FORM.PATH)"
          >Войти</my-button
        >
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  background: #181c23;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  &__content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    user-select: none;
  }

  &__links {
    display: flex;
    gap: 16px;
  }

  &__btn {
    min-width: 100px;
    background: #23272f;
    color: #e0e0e0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    transition: background 0.2s, color 0.2s;
    box-shadow: none;
    outline: none;
    padding: 8px 20px;

    &--active {
      background: #1976d2;
      color: #fff;
      box-shadow: 0 2px 8px rgba(25, 118, 210, 0.15);
    }
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 0 8px;
    &__content {
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
    }
    &__logo {
      font-size: 1.1rem;
    }
    &__links {
      gap: 8px;
    }
  }
}
</style>
