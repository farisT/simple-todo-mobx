import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item';
import Form from './Form';

const TodoList = ({todo}) => {
    console.log(todo);
    return(
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title">{todo.name}</h4>
                <div>
                    {todo.details}
                </div>

            </div>
            
            <ul>
			{todo.TaskList.items.map((item, i) => (
				<Item item={item} key={i}/>
			))}
            </ul>
            <Form store={todo}/>
            <div className="status" > {todo.is_done ? "Task is done" : "Not done"}</div>
            {!todo.is_done && <button  className="btn btn-info mb-2"  onClick={todo.markDone}>Done</button>}
        </div>
    )
}

export default observer(TodoList);