import React from 'react';

export default class Form extends React.Component  {
    render(){
    console.log(this.props)
    return(
        <form className="list-form" onSubmit={e =>{
			e.preventDefault();
			this.props.store.TaskList.add({
				name: this.nameInput.value,
				time_taken: parseInt(this.timeInput.value)
			});
			e.target.reset();
			this.nameInput.focus();
			}}>
			<h5 className="status">Add something to the list</h5>
				<label className="label" htmlFor="name">
					Name
					<input 
					className="input"
					type="text" 
					ref={input => (this.nameInput = input)}
					id="name"
					/>
				</label>
				<label className="label"  htmlFor="time">
					Time (in minutes)
					<input 
					className="input"
					type="number" 
					ref={input => (this.timeInput = input)}
					id="time"
					/>
				</label>
				<button  className="btn btn-warning mb-2" type="submit">Add</button>
			</form>
    );
}
}
