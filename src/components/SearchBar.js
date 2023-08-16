import { useRef } from "react";
// Takes in a function that uses the search term to query channels clicps
export default function searchBar({handleSearch}) {
	const termRef = useRef();

	async function handleSubmit( e ) {
		e.preventDefault();
		await handleSearch(termRef.current.value)
	}
	return <form onSubmit={} className="search-bar" style={{width: "300px"}}>
		<input ref={termRef} type="text" className={'form-control p-2'} placeholder={"Enter Channel Name"}/>
	</form>
}