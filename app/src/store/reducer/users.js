    let users = [{
        id: 1,
        username: 'zs',
        password: '123'
    },
    {
        id: 2,
        username: 'ls',
        password: '123'
    },
    {
        id: 3,
        username: 'ww',
        password: '123'
    },
    {
        id: 4,
        username: 'xm',
        password: '123'
    }];

    export default (state = users, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }