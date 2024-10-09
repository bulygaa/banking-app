import { ITransaction } from '@/types/transaction';
import { snakeToCamelCase } from '@/utils/caseConverters';

export const updateBalance = (balance: number, amount: number, isSubtract: boolean) => {
	const updatedBalance = isSubtract ? balance - amount : balance + amount;

	return Number.parseFloat(updatedBalance.toFixed(2));
};

export const paginateTransactions = (transactions: ITransaction[], searchParams: URLSearchParams) => {
	const page = Number.parseInt(searchParams.get('page') || '1');
	const perPage = Number.parseInt(searchParams.get('per_page') || '10');
	const from = (page - 1) * perPage;
	const to = page * perPage;

	return transactions.slice(from, to);
};

// ! SORTING
export const sortTransactions = (transactions: ITransaction[], searchParams: URLSearchParams): ITransaction[] => {
	const sortBy = searchParams.get('sort_by');
	const sortOrder = searchParams.get('order')?.toLowerCase();

	if (!sortBy || !sortOrder) {
		return transactions;
	}

	const sortField = snakeToCamelCase(sortBy) as keyof ITransaction;

	return [...transactions].sort((a, b) => sortFieldComparator(a[sortField], b[sortField], sortField, sortOrder));
};

function sortFieldComparator(
	a: ITransaction[keyof ITransaction],
	b: ITransaction[keyof ITransaction],
	sortField: keyof ITransaction,
	sortOrder: string
): number {
	if (sortField === 'date') {
		return sortOrder === 'asc'
			? new Date(a as string).getTime() - new Date(b as string).getTime()
			: new Date(b as string).getTime() - new Date(a as string).getTime();
	}

	if (typeof a === 'number' && typeof b === 'number') {
		return sortOrder === 'asc' ? a - b : b - a;
	}

	if (typeof a === 'string' && typeof b === 'string') {
		return sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
	}

	return 0;
}
