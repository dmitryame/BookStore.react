import { RECEIVE_BOOK, UPDATE_BOOK, } from '../actions'

export default function bookReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_BOOK:
			return action.book
		case UPDATE_BOOK:
			return {
				id: action.id,
				title: action.payload.title,
				content: action.payload.content,
			}
		default:
			return state
	}
}
