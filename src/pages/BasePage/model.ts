import { PATHS } from "@/shared/constants/paths";
import { createDomain, sample, split } from "effector";
import { Post } from "@/pages/BasePage/types";
import { getPostsSign } from "@/entities/api/base";
import { $currentName } from "@/app/providers/models/history";

const basePageDomain = createDomain("basePageDomain");

export const $isBasePage = $currentName.map(
  (currentName) => currentName === PATHS.BASE.NAME
);

/////////////////////////////////////////////////////////
/////////////////  Получение постов  ////////////////////
/////////////////////////////////////////////////////////
export const getPostsFn = basePageDomain.createEvent();
export const resetPostsStoreFn = basePageDomain.createEvent();

export const $postsList = basePageDomain.createStore<Post[]>([]);

export const getPostsFx = basePageDomain.createEffect(getPostsSign);

$postsList
  .on(getPostsFx.doneData, (_, posts) => posts.data)
  .reset(resetPostsStoreFn);

split({
  source: $isBasePage,
  match: {
    mounted: (page) => page,
    unMounted: (page) => !page,
  },
  cases: {
    mounted: getPostsFn,
    unMounted: resetPostsStoreFn,
  },
});

sample({
  clock: getPostsFn,
  target: getPostsFx,
});
