import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/Main.scss';
// import App from './About-Filter-Data/App';
// import App from './About-React-Router-V6/App';
// import App from './HC-React-Router-V6/App';
// import App from './About-React-Hook-Form/App';

import App from './Redux-Tutorial/Components/App';
import configureStore from './store/configureStore';
import {
    increment,
    decrement,
    incrementBy
} from './actions/countAction';
import {
    Provider
} from 'react-redux';
const store = configureStore();

// To read state
console.log(store.getState());

// function invokes when state updated
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action to store
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>
// );