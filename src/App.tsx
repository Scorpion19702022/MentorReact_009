import React from 'react'

import styles from './App.module.css'
import RecipesList from './components/RecipesList'
import { QueryClientProvider, QueryClient } from 'react-query'
import NavBar from './components/NavBar/NavBar'
const queryClient = new QueryClient({})

function App() {
	return (
		<div className={styles.App}>
			<QueryClientProvider client={queryClient}>
				<NavBar />
				<RecipesList />
			</QueryClientProvider>
		</div>
	)
}

export default App
