import { createSlice, configureStore } from '@reduxjs/toolkit'

const appSlice = createSlice({
	name: 'app',
	initialState: {
		data: {
			clip: [],
			cursor: null
		},

	},
	reducers: {

		clearClips: state => state.data = { clip: [], cursor: null },
		// Always set cursor with clips
		setClips: ( state, action ) => {
			state.data = action.payload;
		}
	}
});
const store = configureStore({
	reducer: {
		app: appSlice.reducer,
	}
});

export const { setClips, clearClips } = appSlice.actions;
export default store
