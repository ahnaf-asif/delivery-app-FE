export interface RegisterFormProps {
	type: 'courier' | 'company';
}

export interface RegisterFormType {
	name: string;
	email: string;
	phone: string;
	password: string;
}
