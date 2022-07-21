import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/Main.scss';
// import { BrowserRouter as Router} from 'react-router-dom';

// import App from './About-Filter-Data/App';
// import App from './About-React-Router-V6/App';
// import App from './HC-React-Router-V6/App';
// import App from './About-React-Hook-Form/App';
// import App from './PT-React-Router-V6/App';
// import {App} from './About-Login-Page/App';

// import App from './Redux-Tutorial/Components/App';
// import App from './Redux-API/App';
// import configureStore from './store/configureStore';
// import {
//     increment,
//     decrement,
//     incrementBy
// } from './actions/countAction';
// import {
//     Provider
// } from 'react-redux';
// const store = configureStore();

// To read state
// console.log(store.getState());

// function invokes when state updated
// store.subscribe(() => {
//     console.log(store.getState());
// })

// dispatch action to store
// store.dispatch(increment());

// import App from './Redux-Toolkit-Tutorial/App';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import usersSlice from './Redux-Toolkit-Tutorial/features/usersReducer';

// store
// const store = configureStore({
//     reducer:{
//         users:usersSlice
//     }
// })
// console.log(store.getState());

/* --------------- */
// import App from './NS-Redux-Toolkit-Project/App';
// import {store}  from './NS-Redux-Toolkit-Project/redux/store';

// import { App } from './CRUD-React-RTK/App';
// import {store} from './CRUD-React-RTK/redux/store';
// import {App} from './Photo-Gallery-App/Components/App';
// import {store} from './Photo-Gallery-App/redux/store';
// import { App } from './About-Axios-Tutorial/App';
// import { App } from './Cats-App/App';
import { App } from './CRUD-In-RTK/App';
import { Provider } from 'react-redux';
import {store} from './CRUD-In-RTK/redux/store';
// import {store} from './RTK-JS-ECommerce-Project/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// )

//         <Provider store={store}>
//             <App />
//         </Provider>

// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </React.StrictMode>
// );

// root.render(
//     <React.StrictMode>
//         <Router>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </Router>
//     </React.StrictMode>
// );

// root.render(
//     <React.StrictMode>
//         <Router>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </Router>
//     </React.StrictMode>
// );