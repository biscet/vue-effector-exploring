import { UnitTargetable, Store } from "effector";

/////////////////////////////////////////////////////////
////////  Триггер маунт и анмаунт по странице  //////////
/////////////////////////////////////////////////////////
export type ConditionByPageType = {
  $page: Store<boolean>;
  mount: UnitTargetable<void>;
  unmount: UnitTargetable<void>;
};
