'use client';

import { ModalWrapper, Spinner } from '@/components/common';
import { useState, useTransition } from 'react';
import { TRANSACTION_SERVICE } from '@/services';
import { toast } from 'react-toastify';
import ShowWithTimeout from '@/components/common/ShowWithTimeout';
import { appRevalidateTag } from '@/utils/appRevalidateTag';
import { TAGS } from '@/constants/tags';

const RevertTransactionsButton = () => {
	const [isTransitioning, startTransition] = useTransition();
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// ! handlers
	const onCloseModal = () => {
		setIsModalOpen(false);
	};

	const onRevertTransactions = () => {
		setIsModalOpen(true);
	};

	const onSubmitRevert = async () => {
		setIsLoading(true);
		try {
			await TRANSACTION_SERVICE.revertTransactions();
			setIsLoading(false);
			onCloseModal();
			startTransition(() => {
				appRevalidateTag([TAGS.transaction, TAGS.balance]);
			});
		} catch (error) {
			toast((error as Error).message, { type: 'error', position: 'top-center' });
		}
	};

	// ! render
	return (
		<>
			<ShowWithTimeout show={isTransitioning}>
				<Spinner />
			</ShowWithTimeout>

			<button
				onClick={onRevertTransactions}
				className='
					flex
					items-center
					gap-1
					whitespace-nowrap
					text-xs
					hover:text-rose-500
					hover:stroke-rose-500
					stroke-darkButton
					transition-colors
				'
			>
				Revert Transactions
			</button>

			<ModalWrapper
				isOpen={isModalOpen}
				title='Revert transactions'
				submitLoading={isLoading}
				onSubmit={onSubmitRevert}
				onCancel={onCloseModal}
			>
				<p>Are you sure you want to revert all transactions?</p>
			</ModalWrapper>
		</>
	);
};

export default RevertTransactionsButton;
