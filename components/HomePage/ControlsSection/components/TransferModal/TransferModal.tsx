import { FC, FocusEvent, FormEvent, useState } from 'react';
import { ITransferModalProps } from './types';
import { ModalWrapper } from '@/components/common';
import { isValidIBAN } from 'ibantools';

const TransferModal: FC<ITransferModalProps> = ({ isOpen, onSubmit, onCancel, submitLoading }) => {
	const [amount, setAmount] = useState('');
	const [iban, setIban] = useState('');
	const [error, setError] = useState({ amount: '', iban: '' });

	// ! handlers
	const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();

		if (!amount || !iban) {
			if (!amount) setError((errors) => ({ ...errors, amount: 'Amount is required' }));
			if (!iban) setError((errors) => ({ ...errors, iban: 'IBAN is required' }));
			return;
		}

		if (!isValidIBAN(iban)) {
			setError({ ...error, iban: 'IBAN is not valid' });
			return;
		}

		const parsedValue = parseFloat(amount);

		if (parsedValue <= 0 || isNaN(parsedValue)) {
			setError({ ...error, amount: 'Amount must be greater than 0' });
			return;
		}

		onSubmit(parseFloat(amount), iban);
	};

	const onInputChange = (event: FormEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;
		if (name === 'amount') {
			setAmount(value);
			return;
		}
		setIban(value);
	};

	const onFocus = ({ target: { name } }: FocusEvent<HTMLInputElement>) => {
		setError((errors) => ({ ...errors, [name]: '' }));
	};

	// ! render
	return (
		<ModalWrapper
			isOpen={isOpen}
			onCancel={onCancel}
			title='Transfer'
			submitLoading={submitLoading}
			onSubmit={handleSubmit}
		>
			<form
				className='flex flex-col gap-4'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-2'>
					<label>Amount</label>
					<input
						autoFocus
						type='text'
						name='amount'
						placeholder='Enter amount'
						value={amount}
						onFocus={onFocus}
						onChange={onInputChange}
						className='p-2 border rounded'
					/>
					{error.amount && <p className='text-red-500 text-sm'>{error.amount}</p>}
				</div>

				<div className='flex flex-col gap-2'>
					<label>IBAN</label>
					<input
						type='text'
						name='iban'
						placeholder='Enter IBAN'
						className='p-2 border rounded'
						onFocus={onFocus}
						onChange={onInputChange}
					/>
					{error.iban && <p className='text-red-500 text-sm'>{error.iban}</p>}
				</div>

				{/* Hidden submit button to activate on Enter press submit */}
				<button
					type='submit'
					className='hidden'
				/>
			</form>
		</ModalWrapper>
	);
};

export default TransferModal;
