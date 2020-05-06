import React from "react";
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let todoListTasks = this.props.tasks.map (t => {
			return <TodoListTask changeStatus={this.props.changeStatus} changeTitle={this.props.changeTitle} task={t}/>
		});

		return (
			<div className="todoList-tasks">
				{todoListTasks}
			</div>
		)
	}
}

export default TodoListTasks;
