import type { AppGateType } from "@/app/providers/models/gates/types";
import { createDomain } from "effector";
import { createGate } from "effector-vue/composition";

const gatesDomain = createDomain("gatesDomain");

/////////////////////////////////////////////////////////
//////////  Начальное состояние приложения  /////////////
/////////////////////////////////////////////////////////
export const AppGate = createGate<AppGateType>({
  name: "AppGate",
  domain: gatesDomain,
});
