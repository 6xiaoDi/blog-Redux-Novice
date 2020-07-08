/**
 * 使用 redux 来管理数据
 * */
import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import users from './reducer/users';
import items from './reducer/items';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        users,
        items
    }),

    // 对 dispatch 方法进行包装
    // applyMiddleware(thunk),

    // 调用插件
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;