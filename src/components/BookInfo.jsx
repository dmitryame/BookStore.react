import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Link, } from 'react-router-dom'
import { getBook, deleteBook, } from '../actions'

class BookInfo extends Component {
	componentDidMount() {
		this.props.getBook(this.props.match.params.id)
	}

	render() {
		const book = this.props.book
		return (
			<div>
				<h2>{book.id}: {book.title}</h2>
				<p>{book.content}</p>
				<div className="btn-group">
					<Link to={{ pathname: `/books/${book.id}/edit`, state: { book, }, }} className="btn btn-info">Edit</Link>
					<button className="btn btn-danger" type="button" onClick={() => this.props.deleteBook(book.id)}>Delete</button>
					<Link to="/books" className="btn btn-secondary">Close</Link>
				</div>
				<hr />
			</div>
		)
	}
}

const mapStateToProps = state => ({ book: state.book, })

const mapDispatchToProps = { getBook, deleteBook, }

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo)
