import {
	RECEIVE_BOOKS, ADD_BOOK, REMOVE_BOOK, REPLACE_BOOK,
} from '../actions'

const initialState = { books: [], }
export default function booksReducer(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_BOOKS:
			return action.books
		case ADD_BOOK:
			return [
				action.payload, ...state,
			]
		case REMOVE_BOOK:
			return state.filter(book => book.id !== action.payload.id)
		case REPLACE_BOOK:
			return state.map(book => {
				if (book.id === action.payload.id) {
					return {
						...book,
						title: action.payload.title,
						description: action.payload.description,
						author: action.payload.author,
						tags: action.payload.tags,
					}
				} return book
			})
		default:
			return state
	}
}
