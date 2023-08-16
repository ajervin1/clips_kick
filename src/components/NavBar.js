// In control of logging users in and out
import { NavLink, Link } from 'react-router-dom'
import '../components/NavBar.css'
import { useDispatch, useSelector } from "react-redux";
import { auth, firebase } from "../firestore";
import SearchBar from "./SearchBar";

export default function NavBar({handleSearch}) {
	const dispatch = useDispatch();
	const state = useSelector(state => state);



	return <header className="header mb-4">
		<div className="container d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center">
				<h3 className={'logo'}>Kick Clips</h3>
			</div>

			<div className="nav-links">
				<a href={'/'} className={'fs-5 me-3 selected  link fw-semibold'}>Home</a>
				<a href={'/favorites'} className={"fs-5 link text-white fw-semibold"}>Favorites</a>
			</div>
			<div className="actions">
				<SearchBar handleSearch={handleSearch} />
			</div>
		</div>

	</header>
}