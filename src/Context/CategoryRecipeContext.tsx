import { createContext, useState } from 'react'
import { RecipeType } from '../types/MyTypes'
import useFetch from '../Hooks/useFetch'

type defaultStateType = {
	recipesResult: RecipeType[]
	selectRecipesByCategory(query: string): void
}

type CategoryProviderType = {
	children: React.ReactNode
}

const defaultState: defaultStateType = {
	recipesResult: [],
	selectRecipesByCategory: (query: string) => {},
}

const CategoryRecipeContext = createContext(defaultState)

export const CategoryRecipeContextProvider = ({ children }: CategoryProviderType) => {
	const { data } = useFetch()

	const recipes = Object.values(data)

	const [recipesResult, setRecipesResult] = useState<any>([])

	const selectRecipesByCategory = (query: string) => {
		const selectCategory = recipes.filter((recipe: any) => recipe.meal.toUppercase().includes(query.toUpperCase()))

		console.log(selectCategory)
		console.log('test')

		setRecipesResult(selectCategory)
	}

	return (
		<CategoryRecipeContext.Provider value={{ recipesResult, selectRecipesByCategory }}>
			{children}
		</CategoryRecipeContext.Provider>
	)
}

export default CategoryRecipeContext
