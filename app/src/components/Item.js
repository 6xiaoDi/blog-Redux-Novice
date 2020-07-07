import React from 'react';
import store from "../store";

class Item extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        console.log(store.getState());

        return(
            <div>

            </div>
        );

    }

}

export default Item;