import client from '@/conf/config';
import { Databases, Query } from 'appwrite';

export const database = new Databases(client);
export class AppwriteUserService {
	//create a new record of user inside appwrite
	async getUser(id) {
		console.log('id', id);
		try {
			const userAccount = await database.listDocuments(
				process.env.NEXT_PUBLIC_HMSDB,
				process.env.NEXT_PUBLIC_HMS_USER_COLLECTION,
				[Query.equal('userId', id)]
			);
			console.log('userAccount', userAccount);
			const data = userAccount.documents.filter(
				(user) => user.userId === id
			);
			console.log('data', data);
			return data[0];

			return userAccount;
		} catch (error) {
			console.log('error', error);
			throw error;
		}
	}

	async updateUser({ id, data }) {
		try {
			const response = await database
				.updateDocument(
					process.env.HMSDB,
					process.env.HMS_USER_COLLECTION,
					id,
					data
				)
				.then((data) => {
					return data;
				});
			return response;
		} catch (error) {
			console.log('error', error.message);
			throw error;
		}
	}
}

const appwriteUserService = new AppwriteUserService();

export default appwriteUserService;
