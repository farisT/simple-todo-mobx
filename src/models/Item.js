import { types } from 'mobx-state-tree';

const Item = types.model('Item', {
    name: types.string,
    time_taken: types.number
})

export default Item;