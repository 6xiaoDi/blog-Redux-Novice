let items = [
];

// let maxId = 6; // 当前的id

export default (state = items, action) => {
    switch (action.type) {
        // case 'ADD_ITEM':
        //     return [...state, {
        //         id: ++maxId,
        //         name: action.payload.name,
        //         price: 10000
        //     }];
        case 'UPDATE_ITEMS':
            // 拿到的就是更新的全部数据，一次性返回
            return action.payload.items;
        default:
            return state;
    }
}