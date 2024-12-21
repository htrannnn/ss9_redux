export function login(account) {
	return {
		type: "LOGIN",
		payload: account,
	};
}
