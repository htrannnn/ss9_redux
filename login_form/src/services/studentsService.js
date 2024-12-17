import axios from "axios";
import { BASE_URL } from "./api";

export async function getAllStudent() {
	try {
		const response = await axios.get(`${BASE_URL}/students`);
		return response;
	} catch (error) {}
}
