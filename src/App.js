import React from 'react';
import './App.css';
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

	state = {
		tasks: [
			{title: "JS", isDone: false, priority: "high"},
			{title: "HTML", isDone: true, priority: "medium"},
			{title: "CSS", isDone: false, priority: "medium"},
			{title: "React", isDone: false, priority: "high"}
		],
		filterValue: "All"
	};

	addTask = (newTaskTitle) => {
		let newTask = {
			title: newTaskTitle, isDone: false, priority: "high"
		};
		let newTasks = [...this.state.tasks, newTask];
		this.setState ({
			tasks: newTasks
		});
	};

	changeFilter = (newFilterValue) => {
		this.setState ({
			filterValue: newFilterValue
		})
	};

	changeStatus = (task, newStatus) => {
		let newTasks = this.state.tasks.map (t => {
			if (t === task) {
				return {...t, isDone: newStatus};
			}
			return t;
		})
		this.setState ({
			tasks: newTasks
		})
	};

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<TodoListHeader addTask={this.addTask}/>
					<TodoListTasks changeStatus={this.changeStatus}
								   tasks={this.state.tasks.filter (task => {
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
			</div>
		);
	}
}

export default App;
