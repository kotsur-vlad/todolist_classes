import React from 'react';
import {connect} from "react-redux";

import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {

	componentDidMount () {
	}

	addTodoList = (newTodoListTitle) => {
		this.props.addTodoList(newTodoListTitle)
	};

	render = () => {

		let todolists = this.props.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>)

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

const mapStateToProps = (state) => {
	return {
		todolists: state.todolists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodoList: (newTodoListTitle) => {
			const action = {
				type: "ADD_TODOLIST",
				newTodoListTitle
			}
			dispatch(action)
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
