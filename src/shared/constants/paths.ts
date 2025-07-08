export type RouteType = {
  PATH: string;
  NAME: string;
};

export const PATHS: Record<string, RouteType> = {
  BASE: {
    PATH: "/",
    NAME: "based",
  },
  FORM: {
    PATH: "/form",
    NAME: "form",
  },
  NOT_FOUND: {
    PATH: "/:pathMatch(.*)*",
    NAME: "not-found",
  },
} as const;
