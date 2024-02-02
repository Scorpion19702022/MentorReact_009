import { RecipeType } from '../types/MyTypes'

import styles from './FavRecipesItem.module.css'

type favRecipeItemProps = {
	favRecipeInfo: RecipeType
}

const FavRecipesItem: React.FC<favRecipeItemProps> = ({ favRecipeInfo }) => {
	console.log(favRecipeInfo)

	return (
		<div className={styles.favRecipesItemBox}>
			<div className={styles.favRecipeCard}>
				<h2 className={styles.favRecipeTitle}>{favRecipeInfo.meal}</h2>
			</div>
		</div>
	)
}

export default FavRecipesItem
