export type RandomUser = {
	gender: string;
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: {
			number: number;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	email: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: {
		date: string;
		age: number;
	};
	registered: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
};
// 위 RandomUser 타입은, api data에 따라 만든 것임. 즉 가져올 데이터에 써줄 타입임

export interface Todo {
	// type과 달리 interface는 Todo { ..} 로 씀 = 안 붙음
	id: string;
	title: string;
	contents: string;
	isDone: boolean;
}

export interface NewTodo {
	// 새로 추가 시 newTodo 에 대한 타입 (title, contents만 필요)
	title: string;
	contents: string;
}
