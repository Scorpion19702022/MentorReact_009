import React from 'react'

import styles from './App.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipePage from './pages/RecipePage'
import useFetch from './Hooks/useFetch'
import { WishListProvider } from './Context/WishListContext'
import FavRecipes from './pages/FavRecipes'
import CategoryLink from './components/CategoryLink'
import SearchPage from './pages/SearchPage'
import Category from './pages/Category'

const queryClient = new QueryClient({})

function App() {
	return (
		<div className={styles.App}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
				<WishListProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/recipe/:id' element={<RecipePage />} />
							<Route path='/favouriteList' element={<FavRecipes />} />
							<Route path='/search' element={<SearchPage />} />
							<Route path='/category' element={<Category />} />
						</Routes>
					</BrowserRouter>
				</WishListProvider>
			</QueryClientProvider>
		</div>
	)
}

export default App
