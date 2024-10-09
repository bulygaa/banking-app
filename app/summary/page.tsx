import { FC } from 'react';
import { ITransaction } from '@/types/transaction';
import { SUMMARY_PAGE_TABLE_CONFIG } from './config';
import { TRANSACTION_SERVICE } from '@/services';
import { CommonTable } from '@/components/common';
import { ISummaryPageProps } from '@/app/summary/types';
import Link from 'next/link';
import { HomeIcon } from '@/components/Icons';

const SummaryPage: FC<ISummaryPageProps> = async ({ searchParams }) => {
	const { data, count } = await TRANSACTION_SERVICE.fetchTransactions(searchParams);

	return (
		<div className='flex flex-col items-center h-full w-full overflow-auto px-2 gap-20'>
			<div className='flex flex-col gap-2 w-full'>
				<Link
					href='/'
					className='text-lightGray text-left size-6 stroke-lightGray hover:stroke-red-400'
					title='Go to the Home Page'
				>
					<HomeIcon />
				</Link>
				<p className='text-4xl sm:text-5xl text-lightGray text-center w-full'>Summary</p>
			</div>

			<div className='max-w-6xl w-full'>
				<CommonTable<ITransaction>
					data={data}
					elementsCount={count}
					columnConfig={SUMMARY_PAGE_TABLE_CONFIG}
				/>
			</div>
		</div>
	);
};

export default SummaryPage;
