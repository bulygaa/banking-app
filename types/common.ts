export type Nullable<T> = T | null;

export interface IServerPageDefaultProps<
	Params = Record<string, string>,
	SearchParams = Record<string, string | string[]>,
> {
	params: Params;
	searchParams: SearchParams;
}

export interface IPaginationSearchParams {
	page: string;
	per_page: string;
}

export interface ISortSearchParams {
	sort_by: string;
	order: string;
}

export interface IListResponse<T> {
	data: T[];
	count: number;
}
