import { ETransactionType } from '@/types/transaction';
import { Nullable } from '@/types/common';

export interface IWithdrawDepositModalProps {
	isOpen: boolean;
	transactionType: Nullable<ETransactionType>;
	submitLoading?: boolean;
	onSubmit: (value: number) => void;
	onCancel: () => void;
}
