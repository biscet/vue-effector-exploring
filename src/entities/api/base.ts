import { instance, PromiseResponse } from "@/app/providers/axios";
import { Post } from "@/pages/BasePage/types";

export const getPostsSign = (): PromiseResponse<Post[]> => {
  return instance.get("/posts");
};
