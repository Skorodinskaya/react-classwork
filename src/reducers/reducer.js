const reducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'GET_USERS':
            return {...state, users: payload}

        case 'GET_POSTS':
            return {...state, posts: payload}

        default:
            return {...state}
    }
}

export default reducer