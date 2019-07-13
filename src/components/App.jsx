import React, { Component, } from 'react'
import {
	Router, Route, NavLink, Switch,
} from 'react-router-dom'
import BookAdd from './BookAdd'
import BookList from './BookList'
import BookInfo from './BookInfo'
import BookEdit from './BookEdit'
import history from '../history'

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div className="container">
					<Navigation />
					<Main />
				</div>
			</Router>
		)
	}
}

const Navigation = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<ul className="navbar-nav mr-auto">
			<li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/books">Books</NavLink></li>
			<li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/books/new">Add Book</NavLink></li>
		</ul>
	</nav>
)

const Main = () => (
	<Switch>
		<Route exact path="/" component={BookList} />
		<Route exact path="/books" component={BookList} />
		<Route exact path="/books/new" component={BookAdd} />
		<Route exact path="/books/:id" component={BookInfo} />
		<Route exact path="/books/:id/edit" component={BookEdit} />
	</Switch>
)

export default App
