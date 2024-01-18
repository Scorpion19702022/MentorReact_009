import React from 'react'

import styles from './App.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipePage from './pages/RecipePage'

const queryClient = new QueryClient({})

function App() {
	return (
		<div className={styles.App}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/recipe/:id' element={<RecipePage />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	)
}

export default App
