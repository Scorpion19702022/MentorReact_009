import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './RecipesList.module.css'

const RecipesList = () => {
	const fetchReiceps = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		return [res.data]
	}

	const { data, isError, isLoading } = useQuery('recipesData', fetchReiceps)

	console.log(data)

	const recipeOne = data?.map(item => item.RecipeOne)
	const recipeTwo = data?.map(item => item.RecipeTwo)

	console.log(recipeOne)
	console.log(recipeTwo)

	return (
		<div className={styles.boxRecipesList}>
			<h2>Lista przepisów</h2>
		</div>
	)
}

export default RecipesList
