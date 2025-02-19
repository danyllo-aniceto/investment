export interface IBasePagedApi<T> {
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
  data: Array<T>;
}
