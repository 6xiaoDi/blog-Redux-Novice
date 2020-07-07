/**
 * 使用 redux 来管理数据
 * */
import {createStore, combineReducers} from 'redux';

import users from './reducer/users';
import items from './reducer/items';

const store = createStore(
    combineReducers({
        users,
        items
    })
);

export default store;