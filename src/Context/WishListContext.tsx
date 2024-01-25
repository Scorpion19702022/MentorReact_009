import { createContext, useState } from 'react'

type defaultStateType = {
	favRecipes: any[]
	addToWishList(recipe: any): void
	deleteFromWishList(id: number): void
}

type wishListProviderType = {
	children: React.ReactNode
}

const defaultState: defaultStateType = {
	favRecipes: [],
	addToWishList: (recipe: any) => {},
	deleteFromWishList: (id: number) => {},
}

const WishListContext = createContext(defaultState)

export const WishListProvider = ({ children }: wishListProviderType) => {
	const [favRecipes, setFavRecipes] = useState<any>([])

	const addToWishList = (recipe: any) => {
		const newFavRecipes = favRecipes.find((item: any) => item.id === recipe.id)
		if (!newFavRecipes) {
			setFavRecipes([...favRecipes, recipe])
		}
	}

	const deleteFromWishList = (id: number) => {}

	return (
		<WishListContext.Provider value={{ favRecipes, addToWishList, deleteFromWishList }}>
			{children}
		</WishListContext.Provider>
	)
}

export default WishListContext
