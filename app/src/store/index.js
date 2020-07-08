/**
 * 使用 redux 来管理数据
 * */
import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import users from './reducer/users';
import items from './reducer/items';

const store = createStore(
    combineReducers({
        users,
        items
    }),
    // 调用插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;