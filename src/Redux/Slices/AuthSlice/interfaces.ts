export interface UserInterface {
	loading: boolean;
	success: boolean;
	error: string[];
	isAuthenticated: boolean;
	finishedDispatching: boolean;
	user?: {
		name: string;
		email: string;
		phone: string;
		type: string;
	};
}

export interface RegisterFormDataInterface {
	name: string;
	email: string;
	phone: string;
	type: string;
	password: string;
}

export interface LoginFormDataInterface {
	email: string;
	password: string;
}
