// Takes a function that is passed the value that is selected
// Need to keep these options in sync with parent state somehow
// day week month all
export default function FilterOptions({handleFilter}) {
	return <select onChange={handleFilter} defaultValue={'month'} className="form-select w-25" >
		<option  value='day'>Day</option>
		<option value="week">Week</option>
		<option value="month">Month</option>
		<option value="all">All Time</option>
	</select>
}