import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext();

class ContextStore extends Component {
    
    getUser = (user) => {
        this.setState(user);
    }

    state = {
        user: null,
        getUser: this.getUser, 
    }

    render() {
        return (
            <Provider value={this.state} >
                {this.props.comp}
            </Provider>
        )
    }
}

const WrapperConsumer = (Component) => {
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