'use client';

import React, { FC, memo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { IPaginationProps } from './types';
import { DEFAULT_PAGINATION_PARAMS } from '@/constants/common';
import { Tooltip } from '@/components/common';
import { PaginationButton } from './components';

const Pagination: FC<IPaginationProps> = ({ elementsCount }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentPage = Number.parseInt(searchParams.get('page') ?? DEFAULT_PAGINATION_PARAMS.page);
	const perPage = Number.parseInt(searchParams.get('per_page') ?? DEFAULT_PAGINATION_PARAMS.per_page);

	const totalPages = Math.ceil(elementsCount / perPage);

	// ! helpers
	const createPageURL = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		params.set('per_page', perPage.toString());
		return `${pathname}?${params.toString()}`;
	};

	// ! render
	const prevDisabled = currentPage < 2;
	const nextDisabled = currentPage >= totalPages;

	return (
		<div className='flex items-center justify-center space-x-2 mt-4'>
			{/* First Page Button */}
			<Tooltip title='First Page'>
				<PaginationButton
					href={createPageURL(1)}
					disabled={prevDisabled}
				>
					{'<<'}
				</PaginationButton>
			</Tooltip>

			{/* Previous Page Button */}
			<Tooltip title='Previous Page'>
				<PaginationButton
					href={createPageURL(Math.max(currentPage - 1, 1))}
					disabled={prevDisabled}
				>
					{'<'}
				</PaginationButton>
			</Tooltip>

			{/* Current Page Display */}
			<span className='px-2 py-1 bg-gray-200 rounded text-sm'>{`${currentPage} of ${totalPages}`}</span>

			{/* Next Page Button */}
			<Tooltip title='Next Page'>
				<PaginationButton
					href={createPageURL(Math.min(currentPage + 1, totalPages))}
					disabled={nextDisabled}
				>
					{'>'}
				</PaginationButton>
			</Tooltip>

			{/* Last Page Button */}
			<Tooltip title='Last Page'>
				<PaginationButton
					href={createPageURL(totalPages)}
					disabled={nextDisabled}
				>
					{'>>'}
				</PaginationButton>
			</Tooltip>
		</div>
	);
};

export default memo(Pagination);
