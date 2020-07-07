import React from 'react';
import Item from "./Item";

export default class List extends React.Component {

    render() {

        let items = localStorage.getItem('items');
        // items如果存在，就将其转为对象
        items = items && JSON.parse(items);
        console.log(items);

        return(
            <div>
                <Item datas={this.props.data}/>
            </div>
        );

    }

}