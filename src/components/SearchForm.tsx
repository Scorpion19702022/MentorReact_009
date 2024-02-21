import { SubmitHandler, useForm } from 'react-hook-form'
import CategoryLink from './CategoryLink'
import { useNavigate } from 'react-router-dom'

import styles from '../components/Category.module.css'

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
		<div className={styles.wrapper_search_form}>
			<CategoryLink />
			<form className={styles.form_search_form} onSubmit={handleSubmit(onSubmit)}>
				<input className={styles.input_search_form} {...register('query')} type='text' />
				<button className={styles.btn_search_form} type='submit'>
					Szukaj
				</button>
			</form>
		</div>
	)
}

export default SearchForm
