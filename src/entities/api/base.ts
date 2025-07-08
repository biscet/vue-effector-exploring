import type { Post } from "@/pages/BasePage/types";
import type { PromiseResponse } from "@/app/providers/axios";
import { instance } from "@/app/providers/axios";
import { POST_LIST_SIZE } from "@/shared/constants/query";

export const getPostsSign = (page: number): PromiseResponse<Post[]> => {
  return instance.get("/posts", {
    params: {
      _limit: POST_LIST_SIZE,
      _page: page,
    },
  });
};
