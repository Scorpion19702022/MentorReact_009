import { useContext } from 'react'
import WishListContext from '../Context/WishListContext'
import FavRecipesItem from '../components/FavRecipesItem'
import { RecipeType } from '../types/MyTypes'

const FavRecipes = () => {
	const { favRecipes } = useContext(WishListContext)

	console.log(favRecipes)

	return (
		<div>
			<h2>Favourite Lists</h2>
			{favRecipes.map((item: RecipeType) => {
				return <FavRecipesItem favRecipeInfo={item} />
			})}
		</div>
	)
}

export default FavRecipes
