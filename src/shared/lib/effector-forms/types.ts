import { AnyFormValues } from "effector-forms";
import { Ref } from "vue";

export type FieldShape<V> = {
  value: Ref<V>;
  firstError: Ref<{ errorText?: string } | null>;
};

export type FormLike<F extends AnyFormValues> = {
  models: { [K in keyof F]: { value: F[K] } };
  fields: { [K in keyof F]: FieldShape<F[K]> };
};

export type StringKey<T> = Extract<keyof T, string>;
