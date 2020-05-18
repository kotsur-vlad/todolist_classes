import React from 'react';

import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {

	componentDidMount () {
		this.restoreState();
	}

	state = {
		todolists: [
			// {id: 1, title: "Mount"},
			// {id: 2, title: "Week"},
			// {id: 3, title: "Day"}
		]
	};
	newTodoListId = 1;

	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem("todolists", stateAsString)
	};

	restoreState = () => {
		let stateAsString = localStorage.getItem("todolists");
		if (stateAsString) {
			let state = JSON.parse(stateAsString);
			state.todolists.forEach(tl => {
				if (tl.id >= this.newTodoListId) {
					this.newTodoListId++;
				}
			});
			this.setState(state);
		}
	};

	addTodoList = (newTodoListTitle) => {
		let newTodoList = {
			id: this.newTodoListId,
			title: newTodoListTitle,
		};
		this.newTodoListId++;
		let newTodoLists = [...this.state.todolists, newTodoList];
		this.setState({
			todolists: newTodoLists
		}, () => {
			this.saveState()
		});
	};

	render = () => {

		let todolists = this.state.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>)

		return (
			<>
				<div>
					<AddNewItemForm addItem={this.addTodoList}/>
				</div>
				<div className="App">
					{todolists}
				</div>
			</>
		);
	}
}

export default App;
