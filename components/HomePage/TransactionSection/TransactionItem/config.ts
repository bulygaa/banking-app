import { ETransactionType } from '@/types/transaction';

export const TRANSACTION_TYPE_TO_COLOR: Record<ETransactionType, string> = {
	[ETransactionType.DEPOSIT]: 'text-successGreen', // Green for deposits
	[ETransactionType.WITHDRAWAL]: 'text-withdrawalRed', // Red for withdrawals
	[ETransactionType.TRANSFER]: 'text-warningYellow', // Yellow for transfers
};
