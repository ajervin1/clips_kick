import axios from 'axios'

const api = axios.create({
	baseURL: 'https://kick.com/api/v2',
})

/* Api Calls */
// Result of all api calls
const result = {
	clips: [],
	nextCursor: ""
}

export async function getPopularClips( cursor = 0, sort = "view", time = "month" ) {
	const { data } = await api.get("/clips", {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}

export async function getClipsByChannel( channel, cursor = 0, sort = "view", time = "month" ) {
	const { data } = await api.get(`/channels/${ channel }/clips`, {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}


export async function getClipsByCategory( category, cursor = 0, sort = "view", time = "month" ) {
	const { data } = await api.get(`/categories/${ category }/clips`, {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}




