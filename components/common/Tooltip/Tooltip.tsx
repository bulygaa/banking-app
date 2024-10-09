import React, { FC } from 'react';
import { ITooltipProps } from './types';

const Tooltip: FC<ITooltipProps> = ({ title, children }) => {
	return (
		<div className='relative group flex items-center justify-center'>
			{children}
			<div
				className='absolute bottom-full mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 transition-opacity duration-300
        pointer-events-none group-hover:opacity-100'
				style={{ whiteSpace: 'nowrap' }}
			>
				{title}
			</div>
		</div>
	);
};

export default Tooltip;
