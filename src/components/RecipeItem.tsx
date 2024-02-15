import { Link } from 'react-router-dom'
import { RecipeType } from '../types/MyTypes'

import styles from './RecipesList.module.css'
import { useContext } from 'react'
import WishListContext from '../Context/WishListContext'

type recipeItemProps = {
	recipeInfo: RecipeType
}

const RecipeItem: React.FC<recipeItemProps> = ({ recipeInfo }) => {
	const { addToWishList } = useContext(WishListContext)

	return (
		<div key={recipeInfo.id} className={styles.recipeCard}>
			<Link to={`/recipe/${recipeInfo.id}`}>
				<img className={styles.img} src={recipeInfo.img} alt='' />
			</Link>
			<h3 className={styles.title}>{recipeInfo.meal}</h3>
			<h5 className={styles.recipeCategory}>{recipeInfo.category}</h5>
			<div className={styles.ingredients}>
				<em className={styles.titleIngredients}>ingredients:</em>
				<ul className={styles.recipeIngredients}>
					{recipeInfo.ingrendients.map((i: any) => {
						if (i === null) {
							return null
						}
						return (
							<li key={i} className={styles.ingredient}>
								{i}
							</li>
						)
					})}
				</ul>
			</div>
			<p className={styles.method}>{recipeInfo.methodOfPreparing}</p>
			<p className={styles.rating}>
				rating: <span className={styles.countRating}> {recipeInfo.rating}</span>
			</p>
			<em className={styles.author}>{recipeInfo.author}</em>
			<button className={styles.btnAddWish} onClick={() => addToWishList(recipeInfo)}>
				add to favourite
			</button>
		</div>
	)
}

export default RecipeItem
