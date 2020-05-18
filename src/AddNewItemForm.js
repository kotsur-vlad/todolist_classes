import React from "react";

class AddNewItemForm extends React.Component {

	state = {
		error: false,
		title: ""
	};

	onAddItemClick = () => {
		let newItemTitle = this.state.title;
		if (newItemTitle === "") {
			this.setState({
				error: true
			})
		} else {
			this.props.addItem(newItemTitle);
			this.setState({
				error: false,
				title: ""
			});

		}
	}

	onKeyPress = (e) => {
		if (e.key === "Enter") {
			this.onAddItemClick();
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
			<div>
				<div className="todoList-newItemForm">
					<input className={inputClassName} onChange={this.onTitleChange} onKeyPress={this.onKeyPress}
						   value={this.state.title} placeholder="Type new item name"/>
					<button onClick={this.onAddItemClick}>Add</button>
				</div>
			</div>
		)
	}
}

export default AddNewItemForm;
