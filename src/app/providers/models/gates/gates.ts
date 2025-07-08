import type { AppGateType } from "./types";
import { createDomain } from "effector";
import { createGate } from "effector-vue/composition";

const gatesDomain = createDomain("gatesDomain");

export const AppGate = createGate<AppGateType>({
  name: "AppGate",
  domain: gatesDomain,
});
