import client from '@/conf/config';
import conf from '@/conf/config';
import { Account, ID, Databases, Query } from 'appwrite';

export const database = new Databases(client);

export class AppwriteUserService {
	//create a new record of user inside appwrite
	async getUser(id) {
		try {
			const userAccount = await database
				.listDocuments(
					process.env.HMSDB,
					process.env.HMS_USER_COLLECTION
				)
				.then((data) => {
					return data.documents.filter(
						(user) => user.userId === id
					)[0];
				});
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
