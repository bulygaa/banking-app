'use client';
import { FC, useState, useTransition } from 'react';
import { Nullable } from '@/types/common';
import { IControlsSectionProps } from './types';
import { ETransactionType } from '@/types/transaction';
import { TRANSACTION_SERVICE } from '@/services';
import { handleError } from '@/utils/handleError';
import { Spinner, Tooltip } from '@/components/common';
import { IconCreditCard, IconDeposit, IconWithDraw } from '@/components/Icons';
import { ControlsIconButton, TransferModal, WithdrawDepositModal } from './components';
import { appRevalidateTag } from '@/utils/appRevalidateTag';
import { TAGS } from '@/constants/tags';
import { toast } from 'react-toastify';

const ControlsSection: FC<IControlsSectionProps> = ({ balance }) => {
	const [isTransitionPending, startTransition] = useTransition();

	// ! state
	const [openedModalType, setOpenedModalType] = useState<Nullable<ETransactionType>>(null);
	const [loading, setLoading] = useState(false);

	// ! handlers
	const onModalCancel = () => {
		setOpenedModalType(null);
	};

	const onActionButtonClick = (transactionType: ETransactionType) => {
		setOpenedModalType(transactionType);
	};

	const onModalSubmit = async (transactionValue: number, receiverIban?: string) => {
		if (openedModalType !== ETransactionType.DEPOSIT && transactionValue > balance) {
			toast('Insufficient funds', { type: 'error', position: 'top-center' });
			return;
		}

		setLoading(true);
		try {
			await TRANSACTION_SERVICE.createTransaction({
				amount: transactionValue,
				type: openedModalType!,
				receiverIban,
			});

			startTransition(() => {
				appRevalidateTag([TAGS.balance, TAGS.transaction]);
			});
			onModalCancel();
		} catch (error) {
			handleError(error);
		} finally {
			setLoading(false);
		}
	};

	// ! render
	const isOpenedWithdrawDepositModal =
		openedModalType === ETransactionType.DEPOSIT || openedModalType === ETransactionType.WITHDRAWAL;

	return (
		<section className='flex justify-center gap-10'>
			<Spinner open={isTransitionPending} />

			<Tooltip title='Deposit'>
				<ControlsIconButton onClick={() => onActionButtonClick(ETransactionType.DEPOSIT)}>
					<IconDeposit />
				</ControlsIconButton>
			</Tooltip>

			<Tooltip title='Withdraw'>
				<ControlsIconButton onClick={() => onActionButtonClick(ETransactionType.WITHDRAWAL)}>
					<IconWithDraw />
				</ControlsIconButton>
			</Tooltip>

			<Tooltip title='Send to card'>
				<ControlsIconButton onClick={() => onActionButtonClick(ETransactionType.TRANSFER)}>
					<IconCreditCard />
				</ControlsIconButton>
			</Tooltip>

			{/* MODALS */}
			<WithdrawDepositModal
				key={openedModalType + '_withdraw_deposit_modal'} // to reset state
				isOpen={isOpenedWithdrawDepositModal}
				transactionType={openedModalType}
				submitLoading={loading}
				onSubmit={onModalSubmit}
				onCancel={onModalCancel}
			/>

			<TransferModal
				key={openedModalType + '_transfer_modal'} // to reset state
				isOpen={openedModalType === ETransactionType.TRANSFER}
				onSubmit={onModalSubmit}
				onCancel={onModalCancel}
				submitLoading={loading}
			/>
		</section>
	);
};

export default ControlsSection;
