export const addNew = (body) => {
    return {type: 'ADD_TODO', payload: body}
}
export const changeStatus = (id) => {
    return {type: 'CHANGE_STATUS', payload: id}
}