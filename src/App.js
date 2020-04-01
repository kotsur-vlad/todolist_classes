import React from 'react';
import './App.css';
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

	tasks = [
		{title: "JS", isDone: false, priority: "high"},
		{title: "HTML", isDone: true, priority: "high"},
		{title: "CSS", isDone: false, priority: "high"},
		{title: "React", isDone: false, priority: "high"}
	];

	filterValue = "All";

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<TodoListHeader/>
					<TodoListTasks tasks={this.tasks}/>
					<TodoListFooter filterValue={this.filterValue}/>
				</div>
			</div>
		);
	}
}

export default App;
