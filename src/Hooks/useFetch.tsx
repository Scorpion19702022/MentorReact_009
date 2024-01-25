import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useFetch = () => {
	const [recipe, setRecipe] = useState<any>([])
	const getRecipes = async () => {
		const res = await axios.get('https://recipeapp-4edaa-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json')
		const recipes: any[] = Object.values(res.data)

		setRecipe(recipes)

		return recipes
	}

	useEffect(() => {
		getRecipes()
	}, [])

	const { data: recipes, isError, isLoading } = useQuery('recipesData', getRecipes)

	return { recipes, isError, isLoading, recipe }
}

export default useFetch
