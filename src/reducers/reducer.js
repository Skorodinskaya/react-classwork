const reducer = (state, action) => {
switch (action.type) {
    case 'GET_USERS':
        let users = action.payload;
        return{...state, users: users}


    case 'GET_POSTS':
        let posts = action.payload;
        return{...state, users: posts}

    default: return {...state}


}
}

export default reducer