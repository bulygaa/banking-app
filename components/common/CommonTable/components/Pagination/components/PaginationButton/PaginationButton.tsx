import React, { FC, useState } from 'react';
import { IPaginationButtonProps } from './types';
import Link from 'next/link';
import ShowWithTimeout from '@/components/common/ShowWithTimeout';
import { Spinner } from '@/components/common';

const PaginationButton: FC<IPaginationButtonProps> = ({ children, disabled, href }) => {
	const [isLoading, setIsLoading] = useState(false);

	if (disabled) {
		return <div className='px-2 py-1 bg-gray-400 text-white rounded disabled:bg-gray-300 text-sm '>{children}</div>;
	}

	return (
		<>
			<ShowWithTimeout show={isLoading}>
				<Spinner />
			</ShowWithTimeout>

			<Link
				href={href}
				replace
				className='px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 text-sm'
				onClick={() => setIsLoading(true)}
			>
				{children}
			</Link>
		</>
	);
};

export default PaginationButton;
