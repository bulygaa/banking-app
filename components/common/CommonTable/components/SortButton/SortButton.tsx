'use client';
import React, { FC, memo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ISortButtonProps } from './types';
import { DEFAULT_PAGINATION_PARAMS } from '@/constants/common';
import ShowWithTimeout from '@/components/common/ShowWithTimeout';
import { Spinner } from '@/components/common';
import Link from 'next/link';

const SortButton: FC<ISortButtonProps> = ({ sortField }) => {
	const [isLoading, setIsLoading] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// ! params
	const currentSortBy = searchParams.get('sort_by') || '';
	const currentOrder = searchParams.get('order') || 'ASC';

	// ! variables
	const isActive = currentSortBy === sortField;
	const nextOrder = isActive && currentOrder === 'ASC' ? 'DESC' : 'ASC';
	const arrow = isActive && currentOrder === 'ASC' ? '↑' : '↓';

	// ! helpers
	const formUrl = () => {
		const params = new URLSearchParams(searchParams);
		params.set('sort_by', sortField);
		params.set('order', nextOrder);
		params.set('page', DEFAULT_PAGINATION_PARAMS.page);
		params.set('per_page', DEFAULT_PAGINATION_PARAMS.per_page);

		return `${pathname}?${params.toString()}`;
	};

	return (
		<>
			<ShowWithTimeout show={isLoading}>
				<Spinner />
			</ShowWithTimeout>

			<Link
				href={formUrl()}
				onClick={() => setIsLoading(true)}
			>
				<span
					className={`inline-flex items-center px-2 py-1 ml-2 rounded transition duration-300 hover:bg-gray-200 hover:text-blue-600`}
				>
					{arrow}
				</span>
			</Link>
		</>
	);
};

export default memo(SortButton);
