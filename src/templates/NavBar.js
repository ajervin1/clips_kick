// In control of logging users in and out
import { NavLink, Link } from 'react-router-dom'
import '../components/NavBar.css'
import { useDispatch, useSelector } from "react-redux";
import { auth, firebase } from "../firestore";

import { useMemo } from "react";
export default function NavBar() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	async function login(  ) {
		const provider = new firebase.auth.GoogleAuthProvider()
		const result = await auth.signInWithPopup(provider);
		const user = result.user._delegate;

	}
	async function logout(  ) {
		await auth.signOut()

	}
	const authButton = useMemo(() => {
		if ( state.app.user ){
			return <button onClick={logout} className={'btn btn-success'}>Sign Out</button>
		} else {
			return <button onClick={login} className={'btn btn-primary me-2'}>Sign In</button>
		}
	}, [state.app.user])
	return <header className="navbar">
		<div className="container d-flex align-items-center">
			<Link to="/" className={"d-flex text-decoration-none "}>
				<i className="fa fa-yelp fa-2x text-muted me-2"></i> <h3 className={'text-white fw-normal'}>Logo</h3>
			</Link>
			<div className="middle-nav">
				<NavLink to={'/'} className={'fs-5 me-3 link'}>Home</NavLink>
				<NavLink to={'/favorites'} className={"fs-5 link"}>Favorites</NavLink>
			</div>
			<div className="actions">
				{authButton}
			</div>
		</div>

	</header>
}