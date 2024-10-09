'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Nullable } from '@/types/common';
import { IWithdrawDepositModalProps } from './types';
import { ETransactionType } from '@/types/transaction';
import { POSITIVE_FLOAT_NUMBER_REGEX } from '@/constants/common';
import { ModalWrapper } from '@/components/common';

const WithdrawDepositModal: React.FC<IWithdrawDepositModalProps> = ({
	isOpen,
	onSubmit,
	submitLoading = false,
	onCancel,
	transactionType,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState<Nullable<string>>(null);

	// ! handlers
	const onInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
		if (POSITIVE_FLOAT_NUMBER_REGEX.test(value)) {
			setInputValue(value);
		}
	};

	const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();
		const parsedValue = parseFloat(inputValue);

		if (parsedValue <= 0 || isNaN(parsedValue)) {
			setError('Amount must be greater than 0');
			return;
		}
		onSubmit(parseFloat(inputValue));
	};

	const onFocus = () => {
		setError(null);
	};

	// ! variables
	const title = transactionType === ETransactionType.DEPOSIT ? 'Deposit Funds' : 'Withdraw Funds';
	const submitText = transactionType === ETransactionType.DEPOSIT ? 'Deposit' : 'Withdraw';

	// ! render
	return (
		<ModalWrapper
			isOpen={isOpen}
			title={title}
			onSubmit={handleSubmit}
			onCancel={onCancel}
			submitText={submitText}
			submitLoading={submitLoading}
		>
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					type='text'
					className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder='Enter amount'
					value={inputValue}
					onFocus={onFocus}
					onChange={onInputChange}
				/>
				{error && <p className='text-red-500 text-sm'>{error}</p>}
			</form>
		</ModalWrapper>
	);
};

export default WithdrawDepositModal;
