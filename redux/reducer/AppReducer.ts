import { ActionTypes } from "../contents/ActionTypes";

const initialState = {
	questions: [],
	answers: [],
};
type ReducerType = {
	type: string;
	payload: any;
};
export const AppReducer = (
	state = initialState,
	{ type, payload }: ReducerType
) => {
	switch (type) {
		case ActionTypes.QUESTIONS:
			return { ...state, questions: payload };
		case ActionTypes.ANSWERS:
			return { ...state, answers: payload };
		default:
			return state;
	}
};
