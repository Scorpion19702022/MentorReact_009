import { useLocation } from 'react-router-dom'
import CategoryLink from '../components/CategoryLink'
import NavBar from '../components/NavBar/NavBar'
import SearchForm from '../components/SearchForm'
import useFetch from '../Hooks/useFetch'
import { RecipeType } from '../types/MyTypes'
import RecipeItem from '../components/RecipeItem'
import { useEffect, useState } from 'react'

import styles from '../components/Category.module.css'

const Category = () => {
	const location = useLocation()

	const [result, setResult] = useState<any>([])

	const urlCategoryRecipe = new URLSearchParams(location.search).get('name')

	// console.log(urlCategoryRecipe)

	const { data, isError, isLoading } = useFetch()

	if (isLoading) return <h2>Louding ...</h2>

	// if (!isLoading) {
	// 	const filterRecipe = data?.filter((recipe: any) => recipe.category === urlCategoryRecipe)
	// 	setResult(filterRecipe)
	// }

	// if (data !== undefined) {
	// 	const filterRecipe = data?.filter((recipe: any) => recipe.category === urlCategoryRecipe)
	// 	setResult(filterRecipe)
	// }

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (data !== undefined) {
			const filterRecipe = data?.filter((recipe: any) => recipe.category === urlCategoryRecipe)
			setResult(filterRecipe)
		}
	}, [isLoading])

	// console.log(recipes)

	// console.log(recipes)

	// useEffect(() => {
	// 	if (recipes !== undefined) {
	// 		const resultCategoryRecipe =
	// 			recipes !== undefined ? recipes?.filter(recipe => recipe.category === urlCategoryRecipe) : null
	// 		setResult(resultCategoryRecipe)
	// 	}
	// }, [recipes, urlCategoryRecipe])

	return (
		<div className={styles.wrapper_category}>
			<NavBar />
			<div className={styles.content_category}>
				{/* <CategoryLink /> */}
				<SearchForm />
				<h1 className={styles.heading_category}>
					Category: {urlCategoryRecipe} ({result?.length})
				</h1>
				<div>
					{result?.map((recipe: RecipeType) => {
						return <RecipeItem recipeInfo={recipe} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Category
