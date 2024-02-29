import { useLocation } from 'react-router-dom'
import CategoryLink from '../components/CategoryLink'
import NavBar from '../components/NavBar/NavBar'
import SearchForm from '../components/SearchForm'
import useFetch from '../Hooks/useFetch'
import { RecipeType } from '../types/MyTypes'
import RecipeItem from '../components/RecipeItem'
import { useContext, useEffect, useState } from 'react'

import styles from '../components/Category.module.css'
import CategoryRecipeContext from '../Context/CategoryRecipeContext'
import useFilterByCategory from '../Hooks/useFilterByCategory'

const Category = () => {
	const location = useLocation()

	const urlCategoryRecipe = new URLSearchParams(location.search).get('name')

	// console.log(urlCategoryRecipe)

	const { data, isError, isLoading } = useFetch()

	// const { recipesCategory, selectRecipesByCategory } = useContext(CategoryRecipeContext)

	const { recipesCategory, selectRecipesByCategory } = useFilterByCategory(String(urlCategoryRecipe))

	// useEffect(() => {
	// 	selectRecipesByCategory(String(urlCategoryRecipe))
	// }, [])

	if (isLoading) return <h2>Louding ...</h2>

	return (
		<div className={styles.wrapper_category}>
			<NavBar />
			<div className={styles.content_category}>
				{/* <CategoryLink /> */}
				<SearchForm />
				<h1 className={styles.heading_category}>
					Category: {urlCategoryRecipe} ({recipesCategory?.length})
				</h1>
				<div>
					{recipesCategory?.map((recipe: RecipeType, index) => {
						return (
							<div key={index}>
								<RecipeItem recipeInfo={recipe} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Category
