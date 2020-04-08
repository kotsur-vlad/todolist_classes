import React from 'react';
import './App.css';
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

	newTaskTitleRef = React.createRef();

	state = {
		tasks: [
			{title: "JS", isDone: false, priority: "high"},
			{title: "HTML", isDone: true, priority: "medium"},
			{title: "CSS", isDone: false, priority: "medium"},
			{title: "React", isDone: false, priority: "high"}
		],
		filterValue: "All"
	};

	onAddTaskClick = () => {
		let newTaskText = this.newTaskTitleRef.current.value;
		let newTask = {
			title: newTaskText, isDone: false, priority: "high"
		};
		let newTasks = [...this.state.tasks, newTask];
		this.setState ({
			tasks: newTasks
		});
		this.newTaskTitleRef.current.value ="";
	};

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					{/*<TodoListHeader/>*/}
					<div className="todoList-header">
						<h3 className="todoList-header__title">What to Learn</h3>
						<div className="todoList-newTaskForm">
							<input ref={this.newTaskTitleRef} type="text" placeholder="Type new task name"/>
							<button onClick={this.onAddTaskClick}>Add</button>
						</div>
					</div>
					<TodoListTasks tasks={this.state.tasks}/>
					<TodoListFooter filterValue={this.state.filterValue}/>
				</div>
			</div>
		);
	}
}

export default App;
