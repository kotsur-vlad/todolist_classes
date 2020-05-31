import React from 'react';

import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import TodoListTasks from "./TodoListTasks";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";

class TodoList extends React.Component {

	componentDidMount () {
	}

	state = {
		filterValue: "All"
	};

	addTask = (newTaskTitle) => {
		this.props.addTask(newTaskTitle, this.props.id)
	};

	changeFilter = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		})
	};

	changeTask = (taskId, obj) => {
		this.props.changeTask(taskId, obj, this.props.id)
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
					<TodoListTitle todolistId={this.props.id} todolistTitle={this.props.title}
								   deleteTodoList={this.props.deleteTodoList}/>
					<AddNewItemForm addItem={this.addTask}/>
				</div>
				<TodoListTasks todolistId={this.props.id} changeStatus={this.changeStatus} changeTitle={this.changeTitle}
							   deleteTask={this.props.deleteTask}
							   tasks={this.props.tasks.filter(task => {
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

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (newTaskTitle, todolistId) => {
			const action = {
				type: "ADD_TASK",
				newTaskTitle,
				todolistId
			}
			dispatch(action)
		},
		changeTask: (taskId, obj, todolistId) => {
			const action = {
				type: "CHANGE_TASK",
				taskId,
				obj,
				todolistId
			}
			dispatch(action)
		},
		deleteTask: (taskId, todolistId) => {
			const action = {
				type: "DELETE_TASK",
				taskId,
				todolistId
			}
			dispatch(action)
		},
		deleteTodoList: (todolistId) => {
			const action = {
				type: "DELETE_TODOLIST",
				todolistId
			}
			dispatch(action)
		}
	}
}

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList)

export default TodoListContainer;
