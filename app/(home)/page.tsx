import { BALANCE_SERVICE, TRANSACTION_SERVICE } from '@/services';
import { BalanceSection, ControlsSection, TransactionSection } from '@/components/HomePage';

export default async function Home() {
	const [balanceData, transactionsData] = await Promise.all([
		BALANCE_SERVICE.fetchBalance(),
		TRANSACTION_SERVICE.fetchTransactions(),
	]);

	return (
		<div className='flex flex-col items-center h-full w-full overflow-hidden gap-20 pb-5'>
			<BalanceSection balance={balanceData.balance} />
			<ControlsSection balance={balanceData.balance} />
			<TransactionSection transactions={transactionsData.data} />
		</div>
	);
}

// Because we are fetching data from our internal API routes we cannot do it during build.
// To avoid build error we need to tell Next.js that this page is dynamic.
export const dynamic = 'force-dynamic';
