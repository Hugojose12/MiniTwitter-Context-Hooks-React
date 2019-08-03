import React, {Component} from 'react';
import Toolbar from './components/toolbar';
import ListTweets from './components/ListTweets';
import WrapperConsumer from './store';


class App extends Component {

  render() {
    return (
        <div className="App">
          <Toolbar />
          <div className="row" style={{margin: 0}}>
            <div className="col"></div>
            <div className="col-6">
              <ListTweets />
            </div>
            <div className="col"></div>
          </div>
        </div>
    );
  } 
}

export default WrapperConsumer(App); 