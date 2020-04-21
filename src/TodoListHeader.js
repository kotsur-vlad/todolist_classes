import React from "react";

class TodoListHeader extends React.Component {

	state = {
		error: false,
		title: ""
	};

	onAddTaskClick = () => {
		let newTaskTitle = this.state.title;
		if (newTaskTitle === "") {
			this.setState ({
				error: true
			})
		} else {
			this.props.addTask (newTaskTitle);
			this.setState ({
				error: false,
				title: ""
			});

		}
	}

	onKeyPress = (e) => {
		if (e.key === "Enter") {
			this.onAddTaskClick();
		}
	};

	onTitleChange = (e) => {
		this.setState({
			error: false,
			title: e.currentTarget.value
		})
	};

	render = () => {

		let inputClassName = this.state.error ? "error" : "";

		return (
			<div className="todoList-header">
				<h3 className="todoList-header__title">What to Learn</h3>
				<div className="todoList-newTaskForm">
					<input className={inputClassName} onChange={this.onTitleChange} onKeyPress={this.onKeyPress} value={this.state.title} placeholder="Type new task name"/>
					<button onClick={this.onAddTaskClick}>Add</button>
				</div>
			</div>
		)
	}
}

export default TodoListHeader;
