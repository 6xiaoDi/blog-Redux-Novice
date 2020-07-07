import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        let items = localStorage.getItem('items');
        items = items && JSON.parse(items);
        console.log(items);

        return(
            <div>

            </div>
        );

    }

}

export default Item;