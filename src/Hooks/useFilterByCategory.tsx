import { useEffect, useState } from 'react'
import useFetch from './useFetch'

const useFilterByCategory = (category: string) => {
	// const { recipe } = useFetch()

	const { data } = useFetch()

	const recipes = Object.values(data)

	const [recipesCategory, setRecipesCategory] = useState<any[]>([])

	useEffect(() => {
		selectRecipesByCategory()
	}, [])

	const selectRecipesByCategory = () => {
		const selectCategory = recipes.filter((recipe: any) => recipe.category === category)

		console.log(selectCategory)

		setRecipesCategory(selectCategory)
	}

	return { recipesCategory, selectRecipesByCategory }
}

export default useFilterByCategory
