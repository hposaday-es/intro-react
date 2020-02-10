import React from 'react';

class Todo extends React.Component {

	state = {
		isEditing: false,
		editInputText: ''
	}

	showEdit = (e) => {
		this.setState({
			isEditing: true
		})
	}

	handleOnEdit = (newText) => {
		this.props.onEdit(newText);
	}

	onChangeHandler = (e) => {
		if (e.target.value !== '') {
			this.setState({
				editInputText: e.target.value
			})
		}
	}

	render() {
		const { text, isDone, onCheck, onDelete, onEdit } = this.props;

		
		return (
			<div>
				<p>{text}</p>
				<input
					type='checkbox'
					checked={isDone}
					onChange={onCheck}

				/>
				<button
					type='button'
					onClick={this.showEdit}
				>
					Editar
				</button>
				<button
					type='button'
					onClick={onDelete}
				>
					Borrar
				</button>
				{this.state.isEditing &&
					<div>
						<input
							type='text'
							onChange={this.onChangeHandler}
							value={this.state.editInputText}
						/>
					<button
						type='button'
						onClick={this.handleOnEdit}
					>
						Hecho
					</button>
					</div>
				
				}
			</div>

		);

	}
}

export default Todo;
