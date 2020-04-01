import React from "react";
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let todoListTasks = this.props.tasks.map ((task) => {
			return <TodoListTask title={task.title} isDone={task.isDone} priority={task.priority}/>
		});

		return (
			<div className="todoList-tasks">
				{todoListTasks}
			</div>
		)
	}
}

export default TodoListTasks;
