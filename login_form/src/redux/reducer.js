import { combineReducers } from "redux";
import { LOGIN_TYPE, LOGOUT_TYPE } from "./accountConstant";

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
		case LOGOUT_TYPE:
			return {
				...state,
				account: null,
			};

		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	user: accountReducer,
});
