import { FC } from 'react';
import Link from 'next/link';
import { ITransactionSectionProps } from './types';
import { DEFAULT_PAGINATION_PARAMS } from '@/constants/common';
import { TransactionItem } from './TransactionItem';
import { IconChevronRight } from '@/components/Icons';
import TransactionsEmptyState from './TransactionsEmptyState';
import RevertTransactionsButton from './RevertTransactionsButton';

const TransactionSection: FC<ITransactionSectionProps> = ({ transactions }) => {
	const summaryHref = `/summary?page=${DEFAULT_PAGINATION_PARAMS.page}&per_page=${DEFAULT_PAGINATION_PARAMS.per_page}`;

	// ! render
	return (
		<div className='flex flex-col overflow-hidden gap-3 bg-lightBlue p-2 rounded-lg shadow-md w-full max-w-lg'>
			{/* Transaction Section Header */}
			<div className='flex justify-between items-center w-full'>
				<RevertTransactionsButton />

				<Link href={summaryHref}>
					<button
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
						View All
						<div className='h-4 w-4'>
							<IconChevronRight />
						</div>
					</button>
				</Link>
			</div>

			{/* Transaction Section Body */}
			<div className='flex flex-col gap-2 overflow-y-auto'>
				{transactions.map((transaction) => (
					<TransactionItem
						transaction={transaction}
						key={transaction.id}
					/>
				))}

				{!transactions.length && <TransactionsEmptyState />}
			</div>
		</div>
	);
};

export default TransactionSection;
