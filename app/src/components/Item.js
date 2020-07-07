import React from 'react';
import {connect} from 'react-redux';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem() {
        // let val = this.el.value;
        // // console.log(val);
        //
        // store.dispatch({
        //     type: 'ADD_ITEM',
        //     payload: {
        //         name: val
        //     }
        // });
        //
        // this.el.value = '';
        //
        // // 如果直接使用 store ，会绕开组件的更新，因为它既不是 state的变化，也不是 props的变化
        // console.log(store.getState());
        //
        // this.setState(store.getState())
    }

    render() {
        console.log(this.props);

        return(
            <div>
                <input type="text" ref={el => {
                    this.el = el;
                }}/> <button onClick={this.addNewItem}>添加</button>

                <ul>
                    {/*{*/}
                    {/*    items.map(item => {*/}
                    {/*        return(*/}
                    {/*            <li key={item.id}>{item.name}</li>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </ul>
            </div>
        );

    }

}

export default connect()(Item);