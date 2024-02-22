import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useFetch = () => {
	const getRecipes = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		const recipes: any[] = Object.values(res.data)

		return recipes
	}

	useEffect(() => {
		getRecipes()
	}, [])

	const { data, isError, isLoading } = useQuery('recipesData', getRecipes)

	// const recipe: any = Object.values(recipes)

	return { data, isError, isLoading }
}

export default useFetch
