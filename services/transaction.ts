import {
	IGetTransactionsRequestPayload,
	IGetTransactionsResponse,
	IPostTransactionRequestData,
	IPostTransactionResponseData,
} from '@/types/transaction';
import { TAGS } from '@/constants/tags';
import { httpClient } from '@/utils/httpClient';

export const TRANSACTION_SERVICE = {
	fetchTransactions: ({
		page,
		per_page,
		sort_by,
		order,
	}: IGetTransactionsRequestPayload = {}): Promise<IGetTransactionsResponse> => {
		const params = new URLSearchParams();

		if (page) params.append('page', `${page}`);
		if (per_page) params.append('per_page', `${per_page}`);
		if (sort_by) params.append('sort_by', sort_by);
		if (order) params.append('order', order);

		let requestUrl = `transaction`;
		if (params.size) requestUrl += `?${params.toString()}`;

		return httpClient<IGetTransactionsResponse>(requestUrl, {
			next: { tags: [TAGS.transaction] },
		});
	},

	createTransaction: async (body: IPostTransactionRequestData): Promise<IPostTransactionResponseData> => {
		return await httpClient<IPostTransactionResponseData>('transaction', {
			method: 'POST',
			body: JSON.stringify(body),
		});
	},

	revertTransactions: async (): Promise<void> => {
		await httpClient<void>('transaction', {
			method: 'DELETE',
		});
	},
};
