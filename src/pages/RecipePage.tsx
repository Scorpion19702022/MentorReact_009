import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useQuery } from 'react-query'

const RecipePage = () => {
	const { id } = useParams()

	const fetchReiceps = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		return res.data
	}

	const { data, isError, isLoading } = useQuery('recipesData', fetchReiceps)

	// console.log(data)

	let newRecipes = []

	for (const value in data) {
		// console.log(data[value])
		newRecipes.push(data[value])
	}
	const recipe = newRecipes.find(r => r.id === Number(id))
	// console.log(recipe)

	// console.log(id)
	// console.log(newRecipes)

	return (
		<div>
			<h1>Test</h1>
		</div>
	)
}

export default RecipePage
