import axios from 'axios';
import { useEffect } from "@types/react";
import { auth } from "./src/firestore";
import { setUser } from "./src/store";


useEffect(() => {
	auth.onAuthStateChanged(async user => {
		if ( user ) {
			const userData = user._delegate;

			const payload = {
				id: userData.uid,
				email: userData.email,
			}
			const { data } = await axios.post('http://localhost:8000/user', payload);
			dispatch(setUser(data));

		} else {
			dispatch(setUser(null));
		}
	})
}, [])


/* Local Api Calls */
export async function addPosts( posts ) {
	const results = await axios.post('http://localhost:8000/post', posts);
	console.log(results);
	return results
}
export async function addUser( user ) {
	const result = await axios.post('http://localhost:8000/user', user);
	return result
}