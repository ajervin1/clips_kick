import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import { auth, db, firebase } from "./firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getClipsByCategory, getClipsByChannel, getPopularClips } from "./requests";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import HomePage from "./pages/HomePage";
import SortOptions from "./components/SortOptions";
import { setClips } from "./store";
import NavBar from "./components/NavBar";
import ClipItem from "./components/ClipItem";

function App() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.app.data);

	async function handleChannel( channel ) {
		const data = await getClipsByChannel(channel);
		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};

		dispatch(setClips(payload))
	}

	async function handleCategory( category ) {
		const data = await getClipsByCategory(category);

		const payload = {
			clips: data.clips,
			cursor: data.nextCursor
		};
		dispatch(setClips(payload))
	}

	function handleSort( e ) {
		console.log(e.target.value)
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
			<NavBar/>
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
