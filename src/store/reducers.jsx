export default (state, action) => {
    console.log('Reducer:', action)
    switch(action.type){
	    case 'getUser':
			return {...state, user: action.payload.user}
		default:
			return state
	}
}