import { types } from 'mobx-state-tree';
import Item from './Item';

const TaskList =  types.model("List", {
    items: types.array(Item)
}).actions(self => ({
    add(item){
        self.items.push(item);
    }
}))

export default TaskList;