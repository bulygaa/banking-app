export interface ITransferModalProps {
	isOpen: boolean;
	onSubmit: (transactionValue: number, receiverIban: string) => void;
	onCancel: () => void;
	submitLoading: boolean;
}
