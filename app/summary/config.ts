import { ColumnConfig } from '@/components/common';
import { ITransaction } from '@/types/transaction';

export const SUMMARY_PAGE_TABLE_CONFIG: ColumnConfig<ITransaction>[] = [
	{
		title: 'Date',
		render: ({ date }) => {
			return new Date(date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
		},
		sortableName: 'date',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		sortableName: 'amount',
	},
	{
		title: 'Balance',
		dataIndex: 'remainingBalance',
		sortableName: 'remaining_balance',
	},
];
