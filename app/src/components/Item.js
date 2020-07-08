import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[]
        }

        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem() {
    }

    async componentDidMount() {
        // let rs = await axios({
        //     // url:'/api/items'
        //     url: '/items'
        // })
        // // 更新到store
        // this.props.dispatch({
        //     type: 'UPDATE_ITEMS',
        //     payload: {
        //         items: rs.data
        //     }
        // });
        // 这个函数只能是同步的
        function updateAction() {
            // return {
            //     type: 'UPDATE_ITEMS',
            //     payload: {
            //         items: []
            //     }
            // }
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        type: 'UPDATE_ITEMS',
                        payload: {
                            items: []
                        }
                    });
                }, 1000);
            })
        }

        // dispath 最终是接受一个 action 对象，我们可以通过函数来产生这样的一个对象，但是这个函数必须是同步的

        // dispatch 会被修改，这里的 dispatch 并不是真正的原来的 dispatch 函数，
        this.props.dispatch( updateAction() );
    }

    render() {

        return(
            <div>

                <input type="text" ref={el => {
                    this.el = el;
                }}/> <button onClick={this.addNewItem}>添加</button>

                <ul>
                    {
                        this.props.items.map(item => {
                            return(
                                <li key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul>

            </div>
        );

    }

}

export default connect( (state) => {
    // state 就是仓库的 state，该函数的返回值是一个对象，该对象就被解构赋值给 props
    return {
        items: state.items
    };
} )(Item);