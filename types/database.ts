import { ITransaction } from '@/types/transaction';

export interface IDatabase {
	transactions: ITransaction[];
	balance: number;
}
