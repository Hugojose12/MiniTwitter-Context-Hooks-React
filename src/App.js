import React, {Component} from 'react';
import Toolbar from './components/toolbar';
import WrapperConsumer from './store';


class App extends Component {

  render() {
    return (
        <div className="App">
          <Toolbar />
        </div>
    );
  } 
}

export default WrapperConsumer(App); 