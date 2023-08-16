import { useRef } from "react";
// Takes in a function that uses the search term to query channels clicps
export default function SearchBar({handleSearch}) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const termRef = useRef()
	async function handleSubmit( e ) {
		e.preventDefault();
		await handleSearch(termRef.current.value)
	}
	return <form onSubmit={handleSubmit} className="search-bar" style={{width: "300px"}}>
		<input ref={termRef} type="text" className={'form-control p-2'} placeholder={"Enter Channel Name"}/>
	</form>
}