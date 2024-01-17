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
		<div key={recipe.id} className={styles.recipeCard}>
			<img className={styles.img} src={recipe.img} alt='' />
			<h3 className={styles.title}>{recipe.meal}</h3>
			<h5 className={styles.recipeCategory}>{recipe.category}</h5>
			<div className={styles.ingredients}>
				<em className={styles.titleIngredients}>ingredients:</em>
				<ul className={styles.recipeIngredients}>
					<li className={styles.ingredient}>{recipe.ingrendients[1]}</li>
					<li className={styles.ingredient}>{recipe.ingrendients[2]}</li>
					<li className={styles.ingredient}>{recipe.ingrendients[3]}</li>
				</ul>
			</div>
			<p className={styles.method}>{recipe.methodOfPreparing}</p>
			<p className={styles.rating}>
				rating: <span className={styles.countRating}> {recipe.rating}</span>
			</p>
			<em className={styles.author}>{recipe.author}</em>
		</div>
	))

	return (
		<div className={styles.boxRecipesList}>
			<div className={styles.recipesList}>{recipes}</div>
		</div>
	)
}

export default RecipesList
