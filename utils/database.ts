import { Db, MongoClient } from 'mongodb';
import { IDatabase } from '@/types/database';

class DatabaseManager {
	private client: MongoClient;
	private db: Db | null = null;
	private readonly dbName: string = 'banking_app_database';
	private readonly collectionName: string = 'banking_app_collection';

	constructor(uri: string) {
		if (!uri) {
			throw new Error('Mongo URI is not defined');
		}
		this.client = new MongoClient(uri);
	}

	private async connect(): Promise<Db> {
		if (!this.db) {
			await this.client.connect();
			this.db = this.client.db(this.dbName);
		}
		return this.db;
	}

	public async getDatabase(): Promise<IDatabase> {
		const db = await this.connect();
		const collection = db.collection(this.collectionName);

		const databaseDoc = await collection.findOne({});
		const balance = databaseDoc ? databaseDoc.balance : 0;
		const transactions = databaseDoc ? databaseDoc.transactions : [];

		return { balance, transactions };
	}

	public async writeDatabase(database: IDatabase): Promise<void> {
		const db = await this.connect();
		const collection = db.collection(this.collectionName);

		const updateOperation = {
			$set: {
				balance: database.balance,
				transactions: database.transactions,
			},
		};

		await collection.updateOne({}, updateOperation, { upsert: true });
	}

	public async clearDatabase(): Promise<void> {
		const db = await this.connect();
		const collection = db.collection(this.collectionName);

		const updateOperation = {
			$set: {
				balance: 0,
				transactions: [],
			},
		};

		await collection.updateOne({}, updateOperation, { upsert: true });
	}
}

const uri = process.env.NEXT_APP_PUBLIC_MONGO_URI;
if (!uri) {
	throw new Error('Mongo URI is not defined');
}
export const databaseManager = new DatabaseManager(uri);
