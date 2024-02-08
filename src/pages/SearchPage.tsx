import { useLocation } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const SearchPage = () => {
	const location = useLocation()

	const urlSearchRecipe = new URLSearchParams(location.search).get('query')

	const { recipes } = useFetch()

	console.log(recipes)

	console.log(urlSearchRecipe)

	// const searcResult = recipes?.filter( item)

	return (
		<div>
			<h1>Search</h1>
		</div>
	)
}

export default SearchPage
