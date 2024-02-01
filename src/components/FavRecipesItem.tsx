import { RecipeType } from '../types/MyTypes'

type favRecipeItemProps = {
	favRecipeInfo: RecipeType
}

const FavRecipesItem: React.FC<favRecipeItemProps> = ({ favRecipeInfo }) => {
	console.log(favRecipeInfo)

	return <div>{favRecipeInfo.author}</div>
}

export default FavRecipesItem
