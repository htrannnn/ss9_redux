import { combineReducers } from "redux";
import { LOGIN_TYPE } from "./accountConstant";

//initState: lưu trữ các thuộc tính của form
const initState = {
	account: {
		username: "",
		password: "",
		role: "",
	},
};

function accountReducer(state = initState, action) {
	switch (action.type) {
		case LOGIN_TYPE:
			return {
				...state,
				account: action.payload,
			};

		default:
			return;
	}
}

export const rootReducer = combineReducers({
	user: accountReducer,
});
