import React, {Component, createContext} from 'react';
import reducer from './reducers';

const {Provider, Consumer} = createContext()

class ContextStore extends Component {
     
    state = {
        user: null,
        dispatch: (action) => {
						const response = reducer(this.state, action)
						console.log('Reponse:', response)
						this.setState(response)
        } 
    }

    render() {
        const {store} = this.props
        const {dispatch} = this.state

        return (
            <Provider value={store? {[store]:this.state[store], dispatch} :this.state} >
                {this.props.comp}
            </Provider>
        )
    }
}

const WrapperConsumer = Component => {
    return (props) => {
        return(
            <Consumer>
                {context => <Component {...props} context={context} />}
            </Consumer>
        );
    }
}

export default WrapperConsumer;
export {ContextStore};