import { NextResponse } from 'next/server';
import { databaseManager } from '@/utils/database';

// Next is caching the balance, so we need to force dynamic
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, _res: NextResponse) {
	try {
		const database = await databaseManager.getDatabase();

		return NextResponse.json({ balance: database.balance });
	} catch (_error) {
		return NextResponse.json({ message: 'Failed to fetch balance' }, { status: 500 });
	}
}
