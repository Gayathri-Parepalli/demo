import { ActionTypes } from "../contents/ActionTypes";
import data from "../../data.json";

export const getData = (language: keyof typeof data) => {
	return {
		type: ActionTypes.QUESTIONS,
		payload: data[`${language}`],
	};
};
export const allAnswers = (answers: any) => {
	return {
		type: ActionTypes.ANSWERS,
		payload: answers,
	};
};
