import React from 'react'
import { connect, } from 'react-redux'
import { addBook, } from '../actions'

class BookAdd extends React.Component {
  state = {
  	title: '', description: '', author: '', tags: '',
  };

  handleChange = event => {
  	this.setState({ [event.target.name]: event.target.value, })
  };

  handleSubmit = event => {
  	event.preventDefault()
  	const title = this.state.title
  	const description = this.state.description
  	const author = this.state.author
  	const tags = this.state.tags
  	const book = {
  		title, description, author, tags,
  	}

  	this.props.addBook(book)
  };

  render() {
  	return (
	<div>
  			<h4>Add Book</h4>
	<form onSubmit={this.handleSubmit}>
			<div className="form-group">
  					<input
  						type="text" name="title" required value={this.state.title} onChange={this.handleChange}
  						className="form-control" placeholder="Title"
				/>
		</div>


			<div className="form-group">
			<label>Author</label>
			<input
  						type="text" name="author" required value={this.state.author} onChange={this.handleChange}
  						className="form-control"
  					/>
  				</div>

			<div className="form-group">
	<label>Description</label>
  					<textarea
  						name="description" rows="5" required value={this.state.description}
  						onChange={this.handleChange}
  						className="form-control"
				/>
  				</div>

  				<div className="form-group">
  					<label>Tags</label>
  					<input
  						type="text" name="tags" value={this.state.tags} required onChange={this.handleChange}
  						className="form-control"
	/>
  </div>


			<button type="submit" className="btn btn-dark">Create</button>
  			</form>
  		</div>
  	)
  }
}

const mapDispatchToProps = { addBook, }

export default connect(null, mapDispatchToProps)(BookAdd)
