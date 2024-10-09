import { FC } from 'react';
import { IBalanceSectionProps } from './types';

const BalanceSection: FC<IBalanceSectionProps> = ({ balance }) => {
	const formattedBalance = new Intl.NumberFormat('en-US', {
		notation: 'standard',
		compactDisplay: 'long',
	}).format(balance);

	return (
		<div className='flex flex-col gap-4 text-lightGray w-full text-center'>
			<p className='text-4xl sm:text-5xl md:text-6xl'>Your Balance</p>
			<div className='flex justify-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold'>
				<span className='text-inherit mr-1'>$</span>
				<span className='text-inherit break-all text-left pl-2'>{formattedBalance}</span>
			</div>
		</div>
	);
};

export default BalanceSection;
