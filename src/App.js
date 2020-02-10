import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './styles.scss';

class App extends React.Component {

	state = {
		todos: []
	}

	handleOnSubmit = (text) => {
		this.setState({
			todos: [
				...this.state.todos,
				{ text, isDone: false }
			]
		});
	}

	handleOnTodoCheck = (index) => {
		const isDone = !this.state.todos[index].isDone;

		const newTodos = [...this.state.todos];

		newTodos[index].isDone = isDone;

		this.setState({ todos: newTodos });
	}

	handleOnEdit = (todo) => {
		console.log(todo, 'todo onm edit')
		const newTodoArray = this.state.todos;
	}
	
	handleOnDelete = (index) => {
		const newTodoArray = this.state.todos;

		newTodoArray.splice(index, 1);

		this.setState({
			todos: newTodoArray
		})
	}

	render() {
		return (
			<div className="App">
				{this.state.todos.map((todo, index) => {
					return (
						<Todo
							text={todo.text}
							isDone={todo.isDone}
							onCheck={this.handleOnTodoCheck.bind(null, index)}
							onEdit={this.handleOnEdit.bind(null, {
								todo,
								index
							})}
							onDelete={this.handleOnDelete.bind(null,index)}
							
						/>
					);
				})}
				<TodoForm
					onSubmit={this.handleOnSubmit}
				/>
			</div>
		);
	}
}

export default App;
