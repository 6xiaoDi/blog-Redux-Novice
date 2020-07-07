import React from 'react';
import Item from "./Item";

export default class List extends React.Component {

    render() {

        // 当前这个组件希望接受items数据
        console.log(this.props.data)

        return(
            <div>
                <Item datas={this.props.data}/>
            </div>
        );

    }

}