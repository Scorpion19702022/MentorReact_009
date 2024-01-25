import { useState } from 'react'
import useFetch from './useFetch'

const useFilterByCategory = () => {
	const { recipe } = useFetch()

	const [soup, setSoup] = useState()
	const [meat, setMeat] = useState()
	const [cake, setCake] = useState()
	const [vege, setVege] = useState()

	const findProductByCategory = (type: string) => {
		const category = recipe.filter((item: any) => item.category === type)

		if (type === 'soup') {
			console.log(category)
		} else if (type === 'meat') {
			console.log(category)
		} else if (type === 'cake') {
			console.log(category)
		} else if (type === 'vege') {
			console.log(category)
		}
	}
}

export default useFilterByCategory
