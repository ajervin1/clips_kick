// Takes a function that will be passed the value that is selected
export default function SortOptions({handleSort}) {

	return <select onChange={handleSort} className="form-select" aria-label="Default select example">
		<option selected value='views'>Open this select menu</option>
		<option value="likes">One</option>
		<option value="date">Two</option>
	</select>
}