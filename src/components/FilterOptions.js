// Takes a function that is passed the value that is selected
// Need to keep these options in sync with parent state somehow
export default function FilterOptions({handleFilter}) {
	return <select onChange={handleFilter} className="form-select" aria-label="Default select example">
		<option selected value='day'>Day</option>
		<option value="week">Week</option>
		<option value="month">Month</option>
		<option value="year">Year</option>
	</select>
}