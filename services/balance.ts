import { IGetBalanceResponse } from '@/types/balance';
import { TAGS } from '@/constants/tags';
import { httpClient } from '@/utils/httpClient';

export const BALANCE_SERVICE = {
	fetchBalance: async () => {
		return httpClient<IGetBalanceResponse>('balance', { next: { tags: [TAGS.balance] } });
	},
};
