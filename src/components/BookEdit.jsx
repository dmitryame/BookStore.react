import React from 'react'
import { connect, } from 'react-redux'
import { updateBook, } from '../actions'

class BookEdit extends React.Component {
  state = {
  }

  handleChange = event => {
  	this.setState({ [event.target.name]: event.target.value, })
  };

  handleSubmit = event => {
  	event.preventDefault()
  	const id = this.props.book.id
  	const title = this.state.title ? this.state.title : this.props.book.title
  	const description = this.state.description ? this.state.description : this.props.book.description
  	const author = this.state.author ? this.state.author : this.props.book.author
  	const tags = this.state.tags ? this.state.tags : this.props.book.tags
  	const book = {
  		id, title, description, author, tags,
  	}
  	this.props.updateBook(book)
  };

  handleCancel = () => {
  	this.props.history.push(`/books/${this.props.book.id}`)
  }

  render() {
  	const { book, } = this.props

  	if (!book) {
  		return <div />
  	}

  	return (
	<div>
  			<h1>Edit {this.props.book.title}</h1>
	<form onSubmit={this.handleSubmit.bind(this)}>
			<div className="form-group">
			<label>Title</label>
			<input type="text" name="title" defaultValue={this.props.book.title} onChange={this.handleChange} className="form-control" />
  </div>

  				<div className="form-group">
			<label>Author</label>
  					<input type="text" name="author" defaultValue={this.props.book.author} onChange={this.handleChange} className="form-control" />
  </div>

			<div className="form-group">
	<label>Description</label>
  					<textarea name="description" rows="5" defaultValue={this.props.book.description} onChange={this.handleChange} className="form-control" />
  				</div>

  				<div className="form-group">
			<label>Tags</label>
  					<input type="text" name="tags" defaultValue={this.props.book.tags} onChange={this.handleChange} className="form-control" />
  </div>


			<div className="btn-group">
	<button type="submit" className="btn btn-dark">Update</button>
	<button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
  				</div>
  			</form>
  		</div>
  	)
  }
}

const mapStateToProps = state => ({ book: state.book.book, })

const mapDispatchToProps = { updateBook, }

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit)
