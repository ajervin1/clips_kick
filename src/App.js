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
import FilterOptions from "./components/FilterOptions";
function App() {
	const [ sortBy, setSortBy ] = useState('view');
	const [ filterBy, setFilterBy ] = useState('month')
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
	async function handleChannel( channel, sortOption, filterOption ) {
		const data = await getClipsByChannel(channel, sortOption, filterOption);
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		setQueryTerm(channel)
		setQueryType('channel');
		dispatch(setClips(payload))
	}
	async function handleCategory( category, sortOption, filterOption ) {
		const data = await getClipsByCategory(category, sortOption, filterOption);
		setQueryTerm(category)
		setQueryType('category')
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		dispatch(setClips(payload))
	}
	// Filters - Sorts
	async function handleFilter( e ) {
		const filterValue = e.target.value
		setFilterBy(filterValue);
		if ( queryType === 'channel' ){
			await handleChannel(queryTerm, sortBy, filterValue )
		} else if (queryType === 'category'){
			await handleCategory(queryTerm, sortBy, filterValue)
		} else if (queryType === 'popular'){
			const data = await getPopularClips(sortBy, filterValue);
			const payload = {
				clips: data.clips,
				cursor: data.nextCursor
			};
			dispatch(setClips(payload))
		}
	}

	async function handleSort( e ) {

		const sortValue = e.target.value
		setSortBy(sortValue)
		if ( queryType === 'channel' ){
			await handleChannel(queryTerm, sortValue, filterBy)
		} else if (queryType === 'category'){
			await handleCategory(queryTerm, sortValue, filterBy)
		} else if (queryType === 'popular'){
			const data = await getPopularClips(sortValue, filterBy);
			const payload = {
				clips: data.clips,
				cursor: data.nextCursor
			};
			dispatch(setClips(payload))
		}
	}
	async function initCall() {
		const data = await getPopularClips();
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		dispatch(setClips(payload))
	}
	useEffect(() => {
		( async () => {
			await initCall()
		})()
	}, [])

	return (<div id="app">

			<NavBar handleSearch={handleSearch} />
			<div className="container d-flex align-items-center justify-content-between">
				<SortOptions handleSort={handleSort} />
				<FilterOptions handleFilter={handleFilter} />
			</div>

			<div className="container pt-5">
				<section className="clips-grid">
					{ state.clips?.map(clip => {
						return <ClipItem key={clip.id} sortOptions={{sortBy, filterBy}} handleChannel={ handleChannel } handleCategory={ handleCategory } clip={ clip }/>
					}) }
				</section>
			</div>

		</div>
	);
}

export default App;
