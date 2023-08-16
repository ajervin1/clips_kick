// Takes a function that will be passed the value that is selected
export default function SortOptions({handleSort}) {

	return <select defaultValue={'views'} onChange={handleSort} className="form-select" aria-label="Default select example">
		<option  value='views'>Views</option>
		<option value="likes">Likes</option>
		<option value="date">Date</option>
	</select>
}