import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Link, } from 'react-router-dom'

class BookList extends Component {
	render() {
		if (this.props.books.length) {
			return (
				<div>
					<h4>Books</h4>
					{this.props.books.map(book => (
						<div key={book.id}>
							<hr />
							<h4><Link to={`/books/${book.id}`}>{book.title}</Link></h4>
							<p>{book.author}</p>
							<p>{book.description}</p>
							<p>{book.tags}</p>
						</div>
					))}
				</div>
			)
		}
		return (<div>No Books</div>)
	}
}

const mapStateToProps = state => ({ books: state.books.books, })

export default connect(mapStateToProps)(BookList)
