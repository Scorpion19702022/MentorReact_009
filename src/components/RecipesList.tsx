import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const RecipesList = () => {
	const fetchReiceps = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		return res.data
	}

	const { data, isError, isLoading } = useQuery('recipesData', fetchReiceps)

	console.log(data)

	return (
		<div>
			<h2>Lista przepisów</h2>
		</div>
	)
}

export default RecipesList
