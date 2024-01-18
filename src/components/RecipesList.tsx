import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './RecipesList.module.css'

import { Link } from 'react-router-dom'

const RecipesList = () => {
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

	// console.log(newRecipes)

	const recipes = newRecipes?.map(recipe => (
		<div key={recipe.id} className={styles.recipeCard}>
			<Link to={`/recipe/${recipe.id}`}>
				<img className={styles.img} src={recipe.img} alt='' />
			</Link>
			<h3 className={styles.title}>{recipe.meal}</h3>
			<h5 className={styles.recipeCategory}>{recipe.category}</h5>
			<div className={styles.ingredients}>
				<em className={styles.titleIngredients}>ingredients:</em>
				<ul className={styles.recipeIngredients}>
					{recipe.ingrendients.map((i: any) => {
						if (i === null) {
							return null
						}
						return (
							<li key={i} className={styles.ingredient}>
								{i}
							</li>
						)
					})}
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
