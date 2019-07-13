import React from 'react'
import { connect, } from 'react-redux'
import { updateBook, } from '../actions'

class BookEdit extends React.Component {
  handleChange = event => {
  	this.setState({ [event.target.name]: event.target.value, })
  };

  handleSubmit = event => {
  	event.preventDefault()
  	const id = this.props.book.id
  	const title = this.state.title ? this.state.title : this.props.book.title
  	const content = this.state.content ? this.state.content : this.props.book.content
  	const book = { id, title, content, }
  	this.props.updateBook(book)
  };

  handleCancel = () => {
  	this.props.history.push(`/books/${this.props.book.id}`)
  }

  render() {
  	return (
	<div>
	<h1>Edit {this.props.book.title}</h1>
	<form onSubmit={this.handleSubmit}>
			<div className="form-group">
			<label>Title</label>
			<input type="text" name="title" defaultValue={this.props.book.title} onChange={this.handleChange} className="form-control" />
  				</div>
			<div className="form-group">
	<label>Content</label>
	<textarea name="content" rows="5" defaultValue={this.props.book.content} onChange={this.handleChange} className="form-control" />
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

const mapStateToProps = state => ({ book: state.book, })

const mapDispatchToProps = { updateBook, }

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit)
