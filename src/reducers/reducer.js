const reducer = (state, action) => {
    if(action.act === '+') {
        return{...state, a: state.a + action.object}
    } else if(action.act === '-') {
        return {...state, a: state.a - action.object}
    }

    if (action.act === '+') {
        return {...state, b: state.b + action.object}
    } else if (action.act === '-') {
        return {...state, b: state.b- action.object}
    }

    if (action.act === '+') {
        return {...state, c: state.c + action.object}
    } else if (action.act === '-') {
        return {...state, c: state.c - action.object}
    }
    return {...state}
 }
export default reducer