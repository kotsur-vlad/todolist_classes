import React from 'react';

import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import TodoListTasks from "./TodoListTasks";
import AddNewItemForm from "./AddNewItemForm";

class TodoList extends React.Component {

	componentDidMount () {
		this.restoreState();
	}

	state = {
		tasks: [
			// {id: 1, title: "JS", isDone: false, priority: "high"},
			// {id: 2, title: "HTML", isDone: true, priority: "medium"},
			// {id: 3, title: "CSS", isDone: false, priority: "medium"},
			// {id: 4, title: "React", isDone: false, priority: "high"}
		],
		filterValue: "All"
	};
	newTaskId = 1;


	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem("todolist_" + this.props.id, stateAsString)
	};

	restoreState = () => {
		let stateAsString = localStorage.getItem("todolist_" + this.props.id);
		if (stateAsString) {
			let state = JSON.parse(stateAsString);
			state.tasks.forEach(t => {
				if (t.id >= this.newTaskId) {
					this.newTaskId++;
				}
			});
			this.setState(state);
		}
	};

	addTask = (newTaskTitle) => {
		let newTask = {
			id: this.newTaskId,
			title: newTaskTitle,
			isDone: false,
			priority: "high"
		};
		this.newTaskId++;
		let newTasks = [...this.state.tasks, newTask];
		this.setState({
			tasks: newTasks
		}, () => {
			this.saveState()
		});
	};

	changeFilter = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		}, () => {
			this.saveState()
		})
	};

	changeTask = (taskId, obj) => {
		let newTasks = this.state.tasks.map(t => {
			if (t.id === taskId) {
				return {...t, ...obj};
			}
			return t;
		})
		this.setState({
			tasks: newTasks
		}, () => {
			this.saveState()
		})
	};

	changeTitle = (taskId, newTitle) => {
		this.changeTask(taskId, {title: newTitle})
	};

	changeStatus = (taskId, newStatus) => {
		this.changeTask(taskId, {isDone: newStatus})
	};


	render = () => {
		return (
			<div className="todoList">
				<div className="todoList-header">
					<TodoListTitle title={this.props.title}/>
					<AddNewItemForm addItem={this.addTask}/>
				</div>
				<TodoListTasks changeStatus={this.changeStatus}
							   changeTitle={this.changeTitle}
							   tasks={this.state.tasks.filter(task => {
								   switch (this.state.filterValue) {
									   case "All":
										   return true;
									   case "Completed":
										   return task.isDone;
									   case "Active":
										   return !task.isDone;
									   default:
										   return true;
								   }
							   })
							   }/>
				<TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
			</div>
		);
	}
}

export default TodoList;
