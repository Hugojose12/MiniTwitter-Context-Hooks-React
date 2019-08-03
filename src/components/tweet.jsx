import React, {Component} from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from './user/avatar';
import firebase from 'firebase';


class Tweet extends Component {
    constructor(props) {
        super(props);
        
        this.ref = firebase.firestore().collection('tweets')

        this.state = {
            updatedLike: true
        }
    }

    updateLikesUp = (TweetId, e) => {
        this.ref.doc(TweetId).update({
          likes: firebase.firestore.FieldValue.increment(1)
        }).then((docRef) => {
          console.log("Se actualizo los likes")
          this.setState({
            updatedLike: false
            });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
  
      updateLikesDown = (TweetId, e) => {
        this.ref.doc(TweetId).update({
          likes: firebase.firestore.FieldValue.increment(-1)
        }).then((docRef) => {
          console.log("Se actualizo los likes")
          this.setState({
            updatedLike: true
            });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }

    render() {
        return (
            <div>
                <article id={this.props.id} className="mt-3 card-tweet">
                    <section className="AvatarUserTweet">
                        <Avatar photoURL={this.props.author_photoURL} displayName={this.props.author_name}/>
                        <h6 style={{display: 'inline'}}>{this.props.author_name}</h6>
                    </section>
                    <p className="tweetContent">{this.props.content}</p>
                    <footer className="blockquote-footer">By
                        <cite> {this.props.author_email}</cite>
                    </footer>
                    <a className="containerIconLike" onClick={(e) => this.state.updatedLike? this.updateLikesUp(this.props.id, e) : this.updateLikesDown(this.props.id, e)}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </a>
                    <span className="ml-1" styles={{display: 'inline'}}>{this.props.likes} likes</span>
                </article>
            </div>
        )
    }
}

export default Tweet;

