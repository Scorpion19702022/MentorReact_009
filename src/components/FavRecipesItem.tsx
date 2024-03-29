import { useContext } from 'react'
import { RecipeType } from '../types/MyTypes'

import styles from './FavRecipesItem.module.css'
import WishListContext from '../Context/WishListContext'

type favRecipeItemProps = {
	favRecipeInfo: RecipeType
}

const FavRecipesItem: React.FC<favRecipeItemProps> = ({ favRecipeInfo }) => {
	console.log(favRecipeInfo.id)

	const { deleteFromWishList } = useContext(WishListContext)

	return (
		<div className={styles.favRecipesItemBox}>
			<div className={styles.favRecipeCard}>
				<h2 className={styles.favRecipeTitle}>{favRecipeInfo.meal}</h2>
				<h4 className={styles.favRecipeCategory}>{favRecipeInfo.category}</h4>
				<div className={styles.favRecipeIngrendientsBox}>
					{favRecipeInfo.ingrendients.map((i: any) => {
						if (i === null) {
							return null
						}
						return (
							<ul className={styles.favsList} key={i}>
								<li className={styles.favList}>{i}</li>
							</ul>
						)
					})}
				</div>
				<p className={styles.favAuthor}>author: {favRecipeInfo.author}</p>
				<em className={styles.favRating}>rating: {favRecipeInfo.rating}</em>
				<button className={styles.favBtn} onClick={() => deleteFromWishList(favRecipeInfo.id)}>
					delete
				</button>
			</div>
		</div>
	)
}

export default FavRecipesItem
