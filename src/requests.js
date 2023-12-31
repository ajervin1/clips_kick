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
// view date like
export async function getPopularClips(  sort = "view", time = "month", cursor = 0, ) {
	const { data } = await api.get("/clips", {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}

export async function getClipsByChannel( channel, sort = 'view', time = "all", cursor = 0 ) {
	const { data } = await api.get(`/channels/${ channel }/clips`, {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}


export async function getClipsByCategory( category,  sort = "view", time = "all", cursor = 0, ) {
	const { data } = await api.get(`/categories/${ category }/clips`, {
		params: {
			cursor,
			sort,
			time
		}
	});
	return data;
}




