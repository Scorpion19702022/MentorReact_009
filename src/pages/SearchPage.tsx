import { useLocation } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import NavBar from '../components/NavBar/NavBar'
import { useContext } from 'react'
import CategoryRecipeContext from '../Context/CategoryRecipeContext'

const SearchPage = () => {
	const location = useLocation()

	const urlSearchRecipe = new URLSearchParams(location.search).get('query')

	const { data } = useFetch()

	// console.log(urlSearchRecipe)

	// const { recipesResult } = useContext(CategoryRecipeContext)

	const recipes = Object.values(data)

	// console.log(recipesResult)

	const selectCategory = recipes.filter((recipe: any) =>
		recipe.meal.toUpperCase().includes(String(urlSearchRecipe).toUpperCase())
	)

	// console.log(selectCategory)

	// const searcResult = recipes?.filter( item)

	return (
		<div>
			<NavBar />
			<h1>Search</h1>
		</div>
	)
}

export default SearchPage
