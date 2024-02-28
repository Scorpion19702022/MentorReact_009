import { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import NavBar from '../components/NavBar/NavBar'
import RecipesList from '../components/RecipesList'
import SearchForm from '../components/SearchForm'

const Home = () => {
	const { data, isError, isLoading } = useFetch()

	// console.log(recipes)

	// console.log(data)

	// console.log(recipe)

	// const testMap = recipe?.map((item: any) => {
	// 	// console.log(item)
	// 	return <div>{item.category}</div>
	// })

	// const [recipe, setRecipe] = useState<any>([])

	// useEffect(() => {
	// 	// console.log(recipe)
	// }, [recipe])

	// console.log(recipe)

	// let newRecipes = []

	// for (const value in recipes) {
	// 	newRecipes.push(recipes[value])
	// }

	// console.log(newRecipes)

	// console.log(recipe)

	return (
		<>
			{/* {testMap} */}
			<NavBar />
			{/* <SearchForm />
			<RecipesList /> */}
		</>
	)
}

export default Home
