process.env.NEXT_PUBLIC_BASE_API_URL = 'API_URL';

import { TRANSACTION_SERVICE } from '@/services/transaction';
import * as http from '@/utils/httpClient';

import {
	createTransactionPayload,
	fetchingTransitionsPayload,
	transitionMock,
	transitionsList,
} from '../mocks/transition.mocks';

describe('Test transaction service', () => {
	it('Should fetch transitions', async () => {
		const fetchTransactions = jest
			.spyOn(TRANSACTION_SERVICE, 'fetchTransactions')
			.mockResolvedValue(transitionsList);

		const transitions = await TRANSACTION_SERVICE.fetchTransactions(fetchingTransitionsPayload);
		expect(fetchTransactions).toHaveBeenCalledWith(fetchingTransitionsPayload);
		expect(transitions).toMatchObject(transitionsList);
	});
	it('Should create transition', async () => {
		const value = { transaction: transitionMock };
		const createTransaction = jest.spyOn(TRANSACTION_SERVICE, 'createTransaction').mockResolvedValue(value);

		const transition = await TRANSACTION_SERVICE.createTransaction(createTransactionPayload);
		expect(createTransaction).toHaveBeenCalledWith(createTransactionPayload);
		expect(transition).toMatchObject(value);
	});
	it('Should revert transition', async () => {
		const httpClientSpy = jest.spyOn(http, 'httpClient').mockResolvedValue(undefined);

		await TRANSACTION_SERVICE.revertTransactions();
		expect(httpClientSpy).toHaveBeenCalledWith('transaction', {
			method: 'DELETE',
		});
	});
});
