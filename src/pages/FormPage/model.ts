import { FORM_PAGE_FIELDS } from "@/shared/constants/forms";
import { rules } from "@/shared/lib/rules/rules";
import { createDomain, sample } from "effector";
import { createForm } from "effector-forms";

const formPageDomain = createDomain("formPageDomain");

/////////////////////////////////////////////////////////
///////////////////////  Форма  /////////////////////////
/////////////////////////////////////////////////////////
export const userForm = createForm({
  fields: {
    [FORM_PAGE_FIELDS.NAME]: {
      rules: [rules.required()],
      init: "",
    },
    [FORM_PAGE_FIELDS.EMAIL]: {
      rules: [rules.required()],
      init: "",
    },
  },
  validateOn: ["submit"],
  domain: formPageDomain,
});

sample({
  clock: userForm.formValidated,
  source: userForm.$values,
  fn: (values) => {
    console.log(values);
    return null;
  },
});
