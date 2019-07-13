import React from 'react'
import { connect, } from 'react-redux'
import { addBook, } from '../actions'

class BookAdd extends React.Component {
  state = { title: '', content: '', };

  handleChange = event => {
  	this.setState({ [event.target.name]: event.target.value, })
  };

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addBook(this.state)
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
	<textarea
  						name="content" rows="5" required value={this.state.content} onChange={this.handleChange}
  						className="form-control" placeholder="Content"
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
