import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
	{
		userName: {
			type: String,
			required: [true, 'Username is required'],
			unique: [true, 'Username already exists'],
			trim: true,
			minlength: [3, 'Username must be at least 3 characters long'],
		},
		fullName: {
			type: String,
			required: [true, 'Full name is required'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: [true, 'Email already exists'],
			trim: true,
		},
		phone: {
			type: String,
			unique: [true, 'Phone number already exists'],
			trim: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			minlength: [6, 'Password must be at least 6 characters long'],
		},
		avatar: {
			type: String,
			default:
				'https://res.cloudinary.com/dj7k0lade/image/upload/v1620936026/avatars/default_avatar.png',
		},
		acadamicInfo: {
			branch: {
				type: String,
				default: '',
			},
			year: {
				type: String,
				default: '',
			},
			hostel: {
				type: String,
				default: '',
			},
			room: {
				type: String,
				default: '',
			},
			isAllocated: {
				type: Boolean,
				default: false,
			},
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
