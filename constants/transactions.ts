import { ETransactionType } from '@/types/transaction';

export const TRANSACTION_TYPE_TO_VALUE: Record<ETransactionType, string> = {
	[ETransactionType.DEPOSIT]: 'Deposit',
	[ETransactionType.WITHDRAWAL]: 'Withdrawal',
	[ETransactionType.TRANSFER]: 'Transfer',
};
