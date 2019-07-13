import axios from 'axios'
import history from '../history'

export const RECEIVE_BOOKS = 'GET_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const REPLACE_BOOK = 'REPLACE_BOOK'

const apiUrl = 'https://ifpj1qamaa.execute-api.us-east-1.amazonaws.com/prod'


export const getBooks = () => dispatch => axios.get(`${apiUrl}/books`)
	.then(response => {
		dispatch({ type: RECEIVE_BOOKS, books: response.data, })
	})
	.catch(error => { throw (error) })

export const addBook = ({
	title, description, author, tags,
}) => dispatch => axios.post(`${apiUrl}/books`, {
	title, description, author, tags,
})
	.then(response => {
		const data = response.data
		console.log({ data, })
		dispatch({
			type: ADD_BOOK,
			payload: {
				id: data.id, title: data.title, description: data.description, author: data.author, tags: data.tags,
			},
		})
	})
	.then(() => {
		history.push("/books")
	})
	.catch(error => { throw (error) })

export const getBook = id => dispatch => axios.get(`${apiUrl}/books/${id}`)
	.then(response => {
		dispatch({ type: RECEIVE_BOOK, book: response.data, })
	})
	.catch(error => {
		throw (error)
	})

export const deleteBook = id => dispatch => axios.delete(`${apiUrl}/books/${id}`)
	.then(response => {
		dispatch({ type: REMOVE_BOOK, payload: { id, }, })
	})
	.then(() => {
		history.push("/books")
	})
	.catch(error => {
		throw (error)
	})

export const updateBook = book => {
	const bookId = book.id
	return dispatch => axios.put(`${apiUrl}/books/${book.id}`, {
		title: book.title, description: book.description, author: book.author, tags: book.tags,
	})
		.then(response => {
			const data = response.data
			dispatch({
				type: UPDATE_BOOK,
				payload: {
					id: data.id, title: data.title, description: data.description, author: data.author, tags: data.tags,
				},
			})
			dispatch({
				type: REPLACE_BOOK,
				payload: {
					id: data.id, title: data.title, description: data.description, author: data.author, tags: data.tags,
				},
			})
		})
		.then(() => {
			history.push(`/books/${bookId}`)
		})
		.catch(error => { throw (error) })
}
