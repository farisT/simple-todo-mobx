import { types } from 'mobx-state-tree';
import TaskList from './TaskList';

// the todo model that identifies what fits into a model todo
const Todo = types.model('Todo', {
    name: types.string,
    details: types.string,
    is_done: false,
    TaskList: types.optional(TaskList, { items: [] })
}).actions(self =>({
    markDone(){
        self.is_done = true;
    }
}))
.views(self =>({
    status(){
        return self.is_done ? "Done" : "Not Done"
    }
}));

export default Todo;