import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI; // Replace with your MongoDB connection string
		await mongoose.connect(mongoUri, {
			useNewUrlParser: true,
		});
		console.log('MongoDB connected successfully!');
	} catch (error) {
		console.error('MongoDB connection error:', error.message);
	}
};

export default connectDB;
