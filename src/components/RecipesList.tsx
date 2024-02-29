import React, { useContext } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import styles from './RecipesList.module.css'

import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import WishListContext from '../Context/WishListContext'
import RecipeItem from './RecipeItem'
import { RecipeType } from '../types/MyTypes'

const RecipesList = () => {
	const fetchReiceps = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		return res.data
	}

	const { data, isError, isLoading } = useQuery('recipesData', fetchReiceps)

	const { favRecipes, addToWishList, deleteFromWishList } = useContext(WishListContext)
	// console.log(data)

	let newRecipes = []

	for (const value in data) {
		// console.log(data[value])
		newRecipes.push(data[value])
	}

	// console.log(newRecipes)

	const recipes = newRecipes?.map((recipe: RecipeType, index) => {
		return (
			<div key={index}>
				<RecipeItem recipeInfo={recipe} />
			</div>
		)
	})

	return (
		<div className={styles.boxRecipesList}>
			<div className={styles.recipesList}>{recipes}</div>
		</div>
	)
}

export default RecipesList
