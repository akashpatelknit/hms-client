import { createSlice } from '@reduxjs/toolkit';
import fetchUserData from '../actons/fetchUser';
const initialState = {
	user: null,
	loading: false,
};
const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		deleteUser: (state) => {
			state.user = null;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchUserData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
		});
		builder.addCase(fetchUserData.rejected, (state) => {
			state.loading = false;
		});
	},
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
