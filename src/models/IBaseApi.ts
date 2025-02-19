export interface IBaseApi<T> {
  status: boolean;
  message: string;
  data: T;
}
