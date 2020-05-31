import React from "react";

class TodoListTitle extends React.Component {

	onDeleteTodoListClick = () => {
		this.props.deleteTodoList(this.props.todolistId)
	}

	render = () => {
		return (
			<div>
				<h3 className="todoList-header__title">
					{this.props.todolistTitle}
					<button onClick={this.onDeleteTodoListClick}>X</button>
				</h3>
			</div>
		)
	}
}

export default TodoListTitle;
