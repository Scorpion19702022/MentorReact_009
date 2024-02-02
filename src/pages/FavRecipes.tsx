import { useContext } from 'react'
import WishListContext from '../Context/WishListContext'
import FavRecipesItem from '../components/FavRecipesItem'
import { RecipeType } from '../types/MyTypes'

import styles from '../components/FavRecipesItem.module.css'

const FavRecipes = () => {
	const { favRecipes } = useContext(WishListContext)

	console.log(favRecipes)

	return (
		<div className={styles.wrapperFavRec}>
			<h2 className={styles.favHeding}>Favourite Lists</h2>
			{favRecipes.map((item: RecipeType) => {
				return <FavRecipesItem favRecipeInfo={item} />
			})}
		</div>
	)
}

export default FavRecipes
