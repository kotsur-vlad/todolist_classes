import {createStore} from "redux";

const initialState = {
	todolists: [
		{
			id: 1, title: "Mount", tasks: [
				{id: 1, title: "JS", isDone: false, priority: "high"},
				{id: 2, title: "HTML", isDone: true, priority: "medium"},
				{id: 3, title: "CSS", isDone: false, priority: "medium"},
				{id: 4, title: "React", isDone: false, priority: "high"}
			]
		},
		{
			id: 2, title: "Week", tasks: [
				{id: 1, title: "JS", isDone: false, priority: "high"},
				{id: 2, title: "HTML", isDone: true, priority: "medium"},
				{id: 3, title: "CSS", isDone: false, priority: "medium"}
			]
		},
		{
			id: 3, title: "Day", tasks: [
				{id: 1, title: "JS", isDone: false, priority: "high"},
				{id: 2, title: "HTML", isDone: true, priority: "medium"}
			]
		}
	]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODOLIST":
			let newTodoList = {
				id: (new Date()).getTime(),
				title: action.newTodoListTitle,
				tasks: []
			};
			return {
				...state,
				todolists: [...state.todolists, newTodoList]
			}
		case "DELETE_TODOLIST":
			return {
				...state,
				todolists: state.todolists.filter(tl => {
					return tl.id !== action.todolistId
				})
			}
		case "ADD_TASK":
			let newTask = {
				id: (new Date()).getTime(),
				title: action.newTaskTitle,
				isDone: false,
				priority: "high"
			};
			return {
				...state,
				todolists: state.todolists.map(tl => {
					if (tl.id === action.todolistId) {
						return {
							...tl,
							tasks: [...tl.tasks, newTask]
						}
					}
					return tl
				})
			}
		case "DELETE_TASK":
			return {
				...state,
				todolists: state.todolists.map (tl => {
					if (tl.id === action.todolistId) {
						return {
							...tl,
							tasks: tl.tasks.filter(t => {
								return t.id !==action.taskId
							})
						}
					} else {
						return tl
					}
				})
			}
		case "CHANGE_TASK":
			return {
				...state,
				todolists: state.todolists.map(tl => {
					if (tl.id !== action.todolistId) {
						return tl
					} else {
						return {
							...tl,
							tasks: tl.tasks.map(t => {
								if (t.id !== action.taskId) {
									return t
								} else {
									return {
										...t,
										...action.obj
									}
								}
							})
						}
					}

				})
			}
		default:
			return state
	}
}

const store = createStore(reducer);

export default store;