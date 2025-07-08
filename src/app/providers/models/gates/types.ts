/////////////////////////////////////////////////////////
//////////  Начальное состояние приложения  /////////////
/////////////////////////////////////////////////////////
export type AppGateHistoryType = {
  name: string;
  path: string;
  params: Record<string, any>;
  query: Record<string, any>;
};

export type AppGateType = {
  history: AppGateHistoryType;
  appLoaded: boolean;
};
