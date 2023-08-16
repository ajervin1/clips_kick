import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';



import { addPosts, addUser, getClipsByCategory, getClipsByChannel, getPopularClips } from "./requests";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import HomePage from "./pages/HomePage";
import SortOptions from "./components/SortOptions";
import { setClips } from "./store";
import NavBar from "./components/NavBar";
import ClipItem from "./components/ClipItem";
import { useEffect, useState } from "react";
function App() {
	const [ sortBy, setSortBy ] = useState('view');
	const [ queryTerm, setQueryTerm ] = useState(null)
	// Can be channel or category
	const [ queryType, setQueryType ] = useState('popular')
	const dispatch = useDispatch();
	const state = useSelector(state => state.app.data);
	/* Event Handlers */
	async function handleSearch( term ) {
		const data = await getClipsByChannel(term);
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		dispatch(setClips(payload))
	}
	async function handleChannel( channel, sortOption ) {
		const data = await getClipsByChannel(channel, sortOption);
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		setQueryTerm(channel)
		setQueryType('channel');
		dispatch(setClips(payload))
	}
	async function handleCategory( category ) {
		const data = await getClipsByCategory(category);
		setQueryTerm(category)
		setQueryType('category')
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		dispatch(setClips(payload))
	}

	async function handleSort( e ) {

		const sortValue = e.target.value
		console.log(sortValue);
		setSortBy(sortValue)
		if ( queryType === 'channel' ){
			await handleChannel(queryTerm, sortValue)
		} else if (queryType === 'category'){
			await handleCategory(queryTerm, sortValue)
		} else if (queryType === 'popular'){
			const data = await getPopularClips(sortValue);
			const payload = {
				clips: data.clips,
				cursor: data.nextCursor
			};
			dispatch(setClips(payload))
		}
	}

	useEffect(() => {
		async function initCall() {
			const data = await getPopularClips();
			const payload = {
				clips: data.clips,
				cursor: data.nextCursor
			};
			dispatch(setClips(payload))
		}

		initCall();
	}, [])

	return (<div id="app">
			<NavBar handleSearch={handleSearch} />
			<div className="container">
				<SortOptions handleSort={handleSort} />
			</div>

			<div className="container pt-5">
				<section className="clips-grid">
					{ state.clips?.map(clip => {
						return <ClipItem key={clip.id} handleChannel={ handleChannel } handleCategory={ handleCategory } clip={ clip }/>
					}) }
				</section>
			</div>

		</div>
	);
}

export default App;
