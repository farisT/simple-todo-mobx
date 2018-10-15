import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import TaskStore from './models/TaskStore';

//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const store = TaskStore.create({
})


// onPatch function is to view changes to the mobx store and help with debugging
onPatch(store, patch => {
    console.log(patch)
})

makeInspectable(store);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
