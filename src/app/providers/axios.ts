import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export type InstanceResponse<T = any> = AxiosResponse<T>;

export type PromiseResponse<T> = Promise<InstanceResponse<T>>;
