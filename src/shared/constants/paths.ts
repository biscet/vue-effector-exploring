export type RouteType = {
  PATH: string;
  NAME: string;
};

export const PATHS: Record<string, RouteType> = {
  BASE: {
    PATH: "/",
    NAME: "based",
  },
  NOT_FOUND: {
    PATH: "/:pathMatch(.*)*",
    NAME: "not-found",
  },
} as const;
