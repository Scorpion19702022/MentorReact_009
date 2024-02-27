import { useContext } from 'react'
import WishListContext from '../Context/WishListContext'
import FavRecipesItem from '../components/FavRecipesItem'
import { RecipeType } from '../types/MyTypes'

import styles from '../components/FavRecipesItem.module.css'
import NavBar from '../components/NavBar/NavBar'

const FavRecipes = () => {
	const { favRecipes } = useContext(WishListContext)

	// console.log(favRecipes)

	return (
		<div className={styles.wrapperFavRec}>
			<NavBar />
			<div className={styles.box_favRec}>
				<h2 className={styles.favHeading}>Favourite Lists</h2>
				{/* <div className={styles.favListGird}>
				{favRecipes.map((item: RecipeType) => {
					return <FavRecipesItem favRecipeInfo={item} />
				})}
			</div> */}
				<div className={styles.favListGird}>
					{favRecipes.map((item: RecipeType, i: any) => {
						return (
							<div className={styles.favListItem} key={i}>
								<FavRecipesItem favRecipeInfo={item} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default FavRecipes
