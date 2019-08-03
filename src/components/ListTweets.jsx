import React, {Component} from 'react';
import firebase from 'firebase';
import WrapperConsumer from '../store';
import Formtweet from './formtweet';
import Tweet from './tweet';

class ListTweets extends Component {
    constructor(props) {
        super(props);

        this.ref = firebase.firestore().collection('tweets')
        
        this.state = {
            tweets: []
        }
    }

    
    
    onCollectionShow = (querySnapshot) => {
        const tweets = [];
        querySnapshot.forEach((doc) => {
          const { content, author_name, author_uid, author_email, author_photoURL, likes } = doc.data();
          tweets.push({
            id: doc.id,
						content,
						author_name,
						author_uid,
            author_email,
            author_photoURL,
            likes
          });
        });
        this.setState({
          tweets
       });
      }

    async componentDidMount (){
      this.ref.onSnapshot(this.onCollectionShow);
		}
		
		renderListTweets = user => {
			if(!user) {
				return (	
					<div>
						<h2 className="text-center">¡Bienvenido!</h2>
						<h6 className="text-center">Este es el mejor lugar para ver lo que está pasando en tu mundo. Busca personas y temas para seguir ahora.</h6>
					</div>
				)
			} else {
        return (
          <div>
              <div>
                  {this.state.tweets.map(tweet =>
										<Tweet key={tweet.id} {...tweet}/>
                  )} 
              </div>   
          </div>
				)
			}
		}

    render() {
			const {context:{user}} = this.props;
			return (
				<div className="container">
					<Formtweet />
					{this.renderListTweets(user)}
				</div>
			)
    }
}

export default WrapperConsumer(ListTweets);