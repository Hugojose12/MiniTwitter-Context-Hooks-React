import React from 'react'

const styles = {
    avatar:{
        width: '40px',
        margin: '0 15px',
        borderRadius: '50%',
        display: 'inline-block'
    }
  }

export default (props) => {
    return (
        <img style={styles.avatar}
            src={props.photoURL} 
            alt={props.displayName} 
            data-toggle="tooltip" 
            data-placement="bottom" 
            title={props.displayName}>
        </img> 
    )
}