import React from 'react';
import List from './components/List'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {items : [
        {
          id: 1,
          name: 'iPhone XR',
          price: 542500
        },
        {
          id: 2,
          name: 'Apple iPad Air 3',
          price: 377700
        },
        {
          id: 3,
          name: 'Macbook Pro 15.4',
          price: 1949900
        },
        {
          id: 4,
          name: 'Apple iMac',
          price: 1629900
        },
        {
          id: 5,
          name: 'Apple Magic Mouse',
          price: 72900
        },
        {
          id: 6,
          name: 'Apple Watch Series 4',
          price: 599900
        }
      ]}
  }

  render() {
    return(
        <div>
          <List data={this.state.items}/>
        </div>
    )
  }

}

export default App;