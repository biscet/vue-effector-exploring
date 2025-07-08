import type { Post } from "@/pages/BasePage/types";
import { PATHS } from "@/shared/constants/paths";
import { createDomain, sample } from "effector";
import { getPostsSign } from "@/entities/api/base";
import {
  _conditionByPage,
  _currentNameMapped,
} from "@/shared/utils/fabrics/fabrics";
import { get } from "@/shared/lib/lodash";
import { pending } from "patronum";
import { POST_FIRST_PAGE } from "@/shared/constants/query";

const basePageDomain = createDomain("basePageDomain");

export const $isBasePage = _currentNameMapped(PATHS.BASE.NAME);

/////////////////////////////////////////////////////////
///////////////////////  Посты  /////////////////////////
/////////////////////////////////////////////////////////
export const getPostsFn = basePageDomain.createEvent();
export const resetPostsStoreFn = basePageDomain.createEvent();

export const changePostsPageFn = basePageDomain.createEvent<number>();

export const $postsList = basePageDomain.createStore<Post[]>([]);

export const $postsPage = basePageDomain.createStore<number>(POST_FIRST_PAGE);
export const $totalPostsPageCount = basePageDomain.createStore<number>(0);

export const getPostsFx = basePageDomain.createEffect(getPostsSign);

export const $isLoadingPosts = pending([getPostsFx]);

$postsList
  .on(getPostsFx.doneData, (_, res) => get(res, "data", []))
  .reset(resetPostsStoreFn);

$totalPostsPageCount
  .on(getPostsFx.doneData, (_, res) => get(res, "headers.x-total-count", 1))
  .reset(resetPostsStoreFn);

$postsPage.on(changePostsPageFn, (_, page) => page).reset(resetPostsStoreFn);

_conditionByPage({
  $page: $isBasePage,
  mount: getPostsFn,
  unmount: resetPostsStoreFn,
});

sample({
  clock: getPostsFn,
  source: $postsPage,
  fn: (page) => page,
  target: getPostsFx,
});

sample({
  clock: $postsPage,
  filter: $isBasePage,
  target: getPostsFn,
});
