import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import { auth, db, firebase } from "./firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getNowPlaying } from "./requests";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setUser, } from "./store";
import axios from "axios";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {

	async function getData() {

	}

	useEffect(() => {
		getData()
	}, [])

	return (<BrowserRouter>
			<NavBar/>
			<div className="container">
				<Routes>
					<Route path={ '/' } element={ <HomePage/> }/>
				</Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;
