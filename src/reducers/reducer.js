const reducer = (state, action) => {
    if (action.object === '1' && action.act === '+') {
        return {...state, a: state.a++}
    }
    if (action.object === '1' && action.act ==='-') {
        return {...state, a: state.a--}
    }
    return {...state}
}
export default reducer