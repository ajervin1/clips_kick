import { Route, Router, Routes } from 'react-router-dom'

import '../App.css';
import { auth, db, firebase } from "../firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getNowPlaying } from "../requests";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setUser, } from "../store";
import Post from "../templates/Post";
import axios from "axios";
import NavBar from "../templates/NavBar";

function HomePage() {

	useEffect(() => {
		(async () => {
		})();

	}, [])
	return (<div className="home">
			<div className="pt-5">
				<div className="row flex-wrap justify-content-between">

				</div>
			</div>
		</div>
	);
}

export default HomePage;
