import type { ConditionByPageType } from "@/shared/utils/fabrics/types";
import { split } from "effector";
import { $currentName } from "@/app/providers/models/history";

/////////////////////////////////////////////////////////
////////  Триггер маунт и анмаунт по странице  //////////
/////////////////////////////////////////////////////////
export function _conditionByPage({
  $page,
  mount,
  unmount,
}: ConditionByPageType) {
  split({
    source: $page,
    match: {
      mounted: (page) => page,
      unMounted: (page) => !page,
    },
    cases: {
      mounted: mount,
      unMounted: unmount,
    },
  });
}

/////////////////////////////////////////////////////////
//  Возвращает мап событие с текущей страницей по имени /
/////////////////////////////////////////////////////////
export function _currentNameMapped(name: string) {
  return $currentName.map((currentName) => currentName === name);
}
