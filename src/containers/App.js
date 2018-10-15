import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; //This function makes our components observable
import TodoList from '../components/TodoList';
import logo from '../logo.svg';
import '../App.css';


class App extends Component {
  render() {
	console.log(this.props); 
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
        <h3 className="subtitle">Make a new To do</h3>
		<form 
		onSubmit={e =>{
			e.preventDefault();
			store.add({
				name: this.nameInput.value,
				details: this.detailsInput.value,
			});
			e.target.reset();
			this.nameInput.focus();
			}}>
				<label  htmlFor="name">
					Name
					<input 
					required
					className="input"
					type="text" 
					ref={input => (this.nameInput = input)}
					id="name"
					/>
				</label>
				<label  htmlFor="details">
					Details
					<input 
					required
					className="input"
					type="text" 
					ref={input => (this.detailsInput = input)}
					id="details"
					/>
				</label>
				<button className="btn btn-info mb-2" type="submit">Add</button>
			</form>
        </div>
		<div className="card-container">
			{store.Todo.map((todo, i) => (
					<TodoList todo={todo} key={i}/>
				))}
		</div>
      </div>
    );
  }
}

export default inject('store')(observer (App));
