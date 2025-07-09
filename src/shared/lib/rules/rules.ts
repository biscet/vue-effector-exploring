import type { Rule } from "effector-forms-vue";
import { isEmpty } from "@/shared/lib/lodash";

export const rules = {
  required: <V = unknown>(): Rule<V> => ({
    name: "required",
    validator: (value: V) => ({
      isValid: !isEmpty(value),
      errorText: "Данное поле обязательно для заполнения.",
    }),
  }),
} as const;
