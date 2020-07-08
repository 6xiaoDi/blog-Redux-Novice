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
        let rs = await axios({
            // url:'/api/items'
            url: '/items'
        })
        console.log(rs);
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