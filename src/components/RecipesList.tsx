import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './RecipesList.module.css'

const RecipesList = () => {
	const fetchReiceps = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		return [res.data.RecipeOne, res.data.RecipeTwo]
	}

	const { data, isError, isLoading } = useQuery('recipesData', fetchReiceps)

	console.log(data)

	const recipes = data?.map(recipe => (
		<div key={recipe.id}>
			<img className={styles.img} src={recipe.img} alt='' />
			<h2>{recipe.meal}</h2>
			<h4>{recipe.category}</h4>
			<ul>
				<li>{recipe.ingrendients[1]}</li>
				<li>{recipe.ingrendients[2]}</li>
				<li>{recipe.ingrendients[3]}</li>
			</ul>
			<p>{recipe.methodOfPreparing}</p>
			<p>{recipe.rating}</p>
			<em>{recipe.author}</em>
		</div>
	))

	return (
		<div className={styles.boxRecipesList}>
			<h2>Lista przepisów</h2>
			{recipes}
		</div>
	)
}

export default RecipesList
