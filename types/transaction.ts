import { IListResponse, IPaginationSearchParams, ISortSearchParams } from '@/types/common';

export enum ETransactionType {
	DEPOSIT = 'deposit',
	WITHDRAWAL = 'withdrawal',
	TRANSFER = 'transfer',
}

export interface ITransaction {
	id: string;
	amount: number;
	remainingBalance: number;
	date: string;
	type: ETransactionType;
	receiverIban?: string;
}

// ! CRUD
export type IGetTransactionsResponse = IListResponse<ITransaction>;

export interface IGetTransactionsRequestPayload extends Partial<IPaginationSearchParams & ISortSearchParams> {}

export type IPostTransactionRequestData = Pick<ITransaction, 'amount' | 'type' | 'receiverIban'>;

export interface IPostTransactionResponseData {
	transaction: ITransaction;
}
