import { NextResponse } from 'next/server';
import { databaseManager } from '@/utils/database';
import { ETransactionType, IPostTransactionRequestData, ITransaction } from '@/types/transaction';
import { paginateTransactions, sortTransactions, updateBalance } from './heplers';

export async function GET(request: Request, _res: NextResponse) {
	try {
		const database = await databaseManager.getDatabase();
		const searchParams = new URL(request.url).searchParams;

		// modify transactions array
		let transactions = sortTransactions(database.transactions, searchParams);

		transactions = paginateTransactions(transactions, searchParams);

		// return transactions array and count
		return NextResponse.json({ data: transactions, count: database.transactions.length });
	} catch (_error) {
		return NextResponse.json({ message: 'Failed to fetch transactions' }, { status: 500 });
	}
}

// ! create transaction

export async function POST(request: Request, _res: NextResponse) {
	try {
		const database = await databaseManager.getDatabase();

		const body: IPostTransactionRequestData = await request.json();
		const { amount, type, receiverIban } = body;

		const isSubtract = type === ETransactionType.WITHDRAWAL || type === ETransactionType.TRANSFER;

		if (isSubtract && database.balance < amount) {
			return NextResponse.json({ message: 'Insufficient funds' }, { status: 400 });
		}

		// make database balance update and make toFixed(2) for the balance
		database.balance = updateBalance(database.balance, amount, isSubtract);

		const transaction: ITransaction = {
			id: crypto.randomUUID(),
			amount,
			remainingBalance: database.balance,
			date: new Date().toISOString(),
			type,
			receiverIban,
		};

		database.transactions.unshift(transaction);

		await databaseManager.writeDatabase(database);

		return NextResponse.json({ transaction });
	} catch (_error) {
		return NextResponse.json({ message: 'Failed to process transaction' }, { status: 500 });
	}
}

export async function DELETE(_request: Request, _res: NextResponse) {
	try {
		await databaseManager.clearDatabase();
		return NextResponse.json({ message: 'Transactions are reverted' });
	} catch (_error) {
		return NextResponse.json({ message: 'Failed to revert transactions' }, { status: 500 });
	}
}
