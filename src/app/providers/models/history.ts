import type { AppGateType } from "./gates/types";
import { combine, createDomain, sample } from "effector";
import { AppGate } from "@/app/providers/models/gates/gates";
import { get, isEmpty } from "@/shared/lib/lodash";
import { spread } from "patronum";
import router from "@/app/providers/router";

const historyDomain = createDomain("historyDomain");

/////////////////////////////////////////////////////////
//////////////  Информация из роутера  //////////////////
/////////////////////////////////////////////////////////
export const $currentPath = historyDomain.createStore("");
export const $currentName = historyDomain.createStore("");
export const $currentParams = historyDomain.createStore({});
export const $currentQuery = historyDomain.createStore({});

export const $urlCombine = combine(
  $currentPath,
  $currentParams,
  $currentQuery,
  $currentName,
  (currentPath, currentParams, currentQuery, currentName) => ({
    currentPath,
    currentParams,
    currentQuery,
    currentName,
  })
);

sample({
  clock: AppGate.state,
  filter: (gateState: AppGateType) => {
    const routeName = get(gateState, "history.name", null);
    return !isEmpty(routeName);
  },
  fn: (gateState: AppGateType) => ({
    currentPath: get(gateState, "history.path", ""),
    currentParams: get(gateState, "history.params", {}),
    currentQuery: get(gateState, "history.query", {}),
    currentName: get(gateState, "history.name", ""),
  }),
  target: spread({
    currentPath: $currentPath,
    currentParams: $currentParams,
    currentQuery: $currentQuery,
    currentName: $currentName,
  }),
});

/////////////////////////////////////////////////////////
///  Триггер стор для редиректа с помощью эффектора  ////
/////////////////////////////////////////////////////////
export const pushHistoryFn = historyDomain.createEvent<string>();

export const $pushHistory = historyDomain.createStore("");

$pushHistory.on(pushHistoryFn, (_, newPath) => newPath);

/////////////////////////////////////////////////////////
///////////////////  Через router от vue  ///////////////
/////////////////////////////////////////////////////////
export const pushHistoryFx = historyDomain.createEffect((path: string) => {
  return router.push(path);
});
