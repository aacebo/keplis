export interface IPagination {
  readonly page?: number;
  readonly perPage?: number;
  readonly sort?: string[];
  readonly filter?: string;
}
