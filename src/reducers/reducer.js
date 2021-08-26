const reducer = (state, action) => {
    if(action.act === '+' && action.name === '1') {
        return{...state, a: state.a + action.object}
    } else if(action.act === '-' && action.name === '1') {
        return {...state, a: state.a - action.object}
    }

    if (action.act === '+' && action.name === '2') {
        return {...state, b: state.b + action.object}
    } else if (action.act === '-' && action.name === '2') {
        return {...state, b: state.b- action.object}
    }

    if (action.act === '+' && action.name === '3') {
        return {...state, c: state.c + action.object}
    } else if (action.act === '-' && action.name === '3') {
        return {...state, c: state.c - action.object}
    }
    return {...state}
 }
export default reducer