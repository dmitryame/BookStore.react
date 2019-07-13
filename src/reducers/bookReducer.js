import { RECEIVE_BOOK, UPDATE_BOOK, } from '../actions'

export default function bookReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_BOOK:
			return action.book
		case UPDATE_BOOK:
			return {
				id: action.id,
				title: action.payload.title,
				description: action.payload.description,
				author: action.payload.author,
				tags: action.payload.tags,
			}
		default:
			return state
	}
}
