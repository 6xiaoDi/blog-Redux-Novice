import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        // 当前这个组件也希望接受items数据
        console.log(this.props.datas)

        return(
            <div>

            </div>
        );

    }

}

export default Item;