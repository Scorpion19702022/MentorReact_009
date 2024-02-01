import { createContext } from 'react'
import { RecipeType } from '../types/MyTypes'

type defaultStateType = {
	recipesCategory: RecipeType[]
	selectRecipesByCategory(category: string): void
}

type CategoryProviderType = {
	children: React.ReactNode
}

const defaultState: defaultStateType = {
	recipesCategory: [],
	selectRecipesByCategory: (category: string) => {},
}

const CategoryRecipeContext = createContext(defaultState)

export default CategoryRecipeContext
