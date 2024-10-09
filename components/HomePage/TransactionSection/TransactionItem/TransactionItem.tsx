import { FC } from 'react';
import { ITransactionItemProps } from './types';
import { TRANSACTION_TYPE_TO_COLOR } from './config';

const TransactionItem: FC<ITransactionItemProps> = ({ transaction }) => {
	const transactionColor = TRANSACTION_TYPE_TO_COLOR[transaction.type];

	return (
		<div className='flex justify-between items-center p-1.5 bg-white shadow-sm rounded-md'>
			{/* Transaction Type */}
			<span className={`text-xs xxs:text-sm xs:text-base sm:text-lg ${transactionColor}`}>
				{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
			</span>

			{/* Transaction Amount */}
			<span className={`text-xs xxs:text-sm xs:text-base sm:text-lg ${transactionColor}`}>
				${transaction.amount.toFixed(2)}
			</span>
		</div>
	);
};

export default TransactionItem;
