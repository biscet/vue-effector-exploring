import type { Component } from "vue";
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

type NamedComponent = Component & { name: string };

const components = [MyInput, MyButton] as NamedComponent[];

export default components;
