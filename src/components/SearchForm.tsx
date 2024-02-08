import { SubmitHandler, useForm } from 'react-hook-form'
import CategoryLink from './CategoryLink'
import { useNavigate } from 'react-router-dom'

type searchType = {
	query: string
}

const SearchForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<searchType>()

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<searchType> = data => {
		console.log(data)
		navigate(`/search?query=${data.query}`)
		reset()
	}

	return (
		<div>
			<CategoryLink />
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('query')} type='text' />
				<button type='submit'>Szukaj</button>
			</form>
		</div>
	)
}

export default SearchForm
