import { ReactNode } from 'react';

export interface ICommonTableProps<T> {
	data: T[];
	elementsCount: number;
	columnConfig: ColumnConfig<T>[];
}

export interface ColumnConfig<T> {
	title: string;
	dataIndex?: keyof T;
	render?: (record: T, index: number) => ReactNode;
	className?: string;
	sortableName?: string; // make field sortable and give it a searchable name
}
