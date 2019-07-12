import axios from 'axios'
import history from '../history'

export const RECEIVE_ARTICLES = 'GET_ARTICLES'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const REPLACE_ARTICLE = 'REPLACE_ARTICLE'

const apiUrl = 'http://localhost:3001/api/articles'

export const getArticles = () => dispatch => axios.get(`${apiUrl}.json`)
	.then(response => {
		dispatch({ type: RECEIVE_ARTICLES, articles: response.data, })
	})
	.catch(error => { throw (error) })

export const addArticle = ({ title, content, }) => dispatch => axios.post(`${apiUrl}.json`, { title, content, })
	.then(response => {
		const data = response.data
		dispatch({ type: ADD_ARTICLE, payload: { id: data.id, title: data.title, content: data.content, }, })
	})
	.then(() => {
		history.push("/articles")
	})
	.catch(error => { throw (error) })

export const getArticle = id => dispatch => axios.get(`${apiUrl}/${id}.json`)
	.then(response => {
		dispatch({ type: RECEIVE_ARTICLE, article: response.data, })
	})
	.catch(error => {
		throw (error)
	})

export const deleteArticle = id => dispatch => axios.delete(`${apiUrl}/${id}.json`)
	.then(response => {
		dispatch({ type: REMOVE_ARTICLE, payload: { id, }, })
	})
	.then(() => {
		history.push("/articles")
	})
	.catch(error => {
		throw (error)
	})

export const updateArticle = article => {
	const articleId = article.id
	return dispatch => axios.patch(`${apiUrl}/${article.id}.json`, { title: article.title, content: article.content, })
		.then(response => {
			const data = response.data
			dispatch({ type: UPDATE_ARTICLE, payload: { id: data.id, title: data.title, content: data.content, }, })
			dispatch({ type: REPLACE_ARTICLE, payload: { id: data.id, title: data.title, content: data.content, }, })
		})
		.then(() => {
			history.push(`/articles/${articleId}`)
		})
		.catch(error => { throw (error) })
}
