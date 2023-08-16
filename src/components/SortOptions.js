// Takes a function that will be passed the value that is selected
export default function SortOptions({handleSort}) {

	return <select defaultValue={'view'} onChange={handleSort} className="form-select w-25" aria-label="Default select example">
		<option  value='view'>Views</option>
		<option value="like">Likes</option>
		<option value="date">Date</option>
	</select>
}