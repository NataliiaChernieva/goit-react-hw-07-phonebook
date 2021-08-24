//Без Redux-toolkit
// import { createStore} from 'redux';
// import { rootReduser } from './reducers/index'
// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(rootReduser, devToolsEnhancer());

// export default store;


// c Redux-toolkit
// import {configureStore } from '@reduxjs/toolkit';
// import { rootReduser } from './reducers/index';

// const store = configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV!== 'prodaction',
// });

// export default store;


// c Redux-toolkit i Slice
import {configureStore } from '@reduxjs/toolkit';
import items from './slices/items.js';
import filter from './slices/filter.js';

const rootReducer = {
    items,
    filter,
};

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export default store;


 

