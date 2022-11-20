import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterFormDataInterface, LoginFormDataInterface, UserInterface } from './interfaces';
import { axios } from '@/Config';

const emptyUser: UserInterface = {
	loading: false,
	success: false,
	error: [],
	isAuthenticated: false,
	finishedDispatching: false
};

const initialState: UserInterface = emptyUser;

export const registerUser = createAsyncThunk('auth/register', async (formData: RegisterFormDataInterface, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('/auth/signup', formData);
		const accessToken = data.access_token;
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
		localStorage.setItem('access_token', accessToken);
		const currentLoggedInUser = await axios.get('/auth/current-loggedin-user');
		return currentLoggedInUser.data;
	} catch (e) {
		const { response } = e as AxiosError;
		// @ts-ignore
		return rejectWithValue(response?.data.message);
	}
});

export const loginUser = createAsyncThunk('auth/login', async (formData: LoginFormDataInterface, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('/auth/signin', formData);
		const accessToken = data.access_token;
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
		localStorage.setItem('access_token', accessToken);
		const currentLoggedInUser = await axios.get('/auth/current-loggedin-user');
		return currentLoggedInUser.data;
	} catch (e) {
		const message = ['invalid'];
		return rejectWithValue(message);
	}
});

export const getAuth = createAsyncThunk('auth/getAuth', async (arg, { rejectWithValue }) => {
	const token = localStorage.getItem('access_token');
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		try {
			const { data } = await axios.get('/auth/current-loggedin-user');
			return data;
		} catch (e) {
			localStorage.removeItem('access_token');
			rejectWithValue(e);
		}
	} else {
		return rejectWithValue('Not authenticated');
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearAuth: state => {
			state.loading = false;
			state.success = false;
			state.error = [];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = false;
		}
	},
	extraReducers: builder => {
		builder.addCase(getAuth.pending, (state, action) => {
			state.loading = true;
			state.success = false;
			state.error = [];
			state.isAuthenticated = false;
			state.finishedDispatching = false;
		});
		builder.addCase(getAuth.fulfilled, (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = [];
			state.user = action.payload;
			state.isAuthenticated = true;
			state.finishedDispatching = true;
		});
		builder.addCase(getAuth.rejected, (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = [];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = true;
		});

		builder.addCase(registerUser.pending, (state, action) => {
			state.loading = true;
			state.success = false;
			state.error = [];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = false;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = [];
			state.user = action.payload;
			state.isAuthenticated = true;
			state.finishedDispatching = true;
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = action.payload as string[];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = true;
		});
		builder.addCase(loginUser.pending, (state, action) => {
			state.loading = true;
			state.success = false;
			state.error = [];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = false;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = [];
			state.user = action.payload;
			state.isAuthenticated = true;
			state.finishedDispatching = true;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = action.payload as string[];
			state.user = undefined;
			state.isAuthenticated = false;
			state.finishedDispatching = true;
		});
	}
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
