import { faker } from '@faker-js/faker';
import {
	ETransactionType,
	IGetTransactionsRequestPayload,
	IGetTransactionsResponse,
	IPostTransactionRequestData,
	ITransaction,
} from '@/types/transaction';

export const createTransactionPayload: IPostTransactionRequestData = {
	amount: faker.number.int(),
	type: ETransactionType.DEPOSIT,
	receiverIban: faker.string.uuid(),
};

export const transitionMock: ITransaction = {
	id: faker.string.uuid(),
	remainingBalance: faker.number.int(),
	date: faker.date.soon().toLocaleDateString(),
	...createTransactionPayload,
};
export const transitionsList: IGetTransactionsResponse = {
	data: [transitionMock],
	count: 1,
};

export const fetchingTransitionsPayload: IGetTransactionsRequestPayload = {
	order: 'desc',
	page: '1',
	per_page: '10',
};
