import { Spinner } from '@/components/common';
import { BalanceSection, ControlsSection, TransactionSection } from '@/components/HomePage';

const Loading = () => {
	return (
		<div className='flex flex-col items-center h-full w-full overflow-hidden gap-20 pb-5'>
			<Spinner />
			<BalanceSection balance={0} />
			<ControlsSection balance={0} />
			<TransactionSection transactions={[]} />
		</div>
	);
};

export default Loading;
