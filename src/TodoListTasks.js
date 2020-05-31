import React from "react";

import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let todoListTasks = this.props.tasks.map(t => {
			return <TodoListTask key={t.id} changeStatus={this.props.changeStatus} changeTitle={this.props.changeTitle}
								 deleteTask={this.props.deleteTask} todolistId={this.props.todolistId} task={t}/>
		});

		return (
			<div className="todoList-tasks">
				{todoListTasks}
			</div>
		)
	}
}

export default TodoListTasks;
