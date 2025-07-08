import type { Component } from "vue";
import MyInput from "./MyInput.vue";

type NamedComponent = Component & { name: string };

const components = [MyInput] as NamedComponent[];

export default components;
