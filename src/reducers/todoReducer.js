let initState = {
    todos: [
        {
            id: 1,
            text: 'Bring Kitkat',
            status: false
        },
        {
            id: 2,
            text: 'Bring Toblerone',
            status: true
        },
        {
            id: 3,
            text: 'Bring Bounty',
            status: false
        }
    ],
    hello: 'world'
}

export default (state = initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'ADD_TODO': 
            return {
                ...state,
                todos: [...state.todos , payload]
            };
        case 'CHANGE_STATUS':
            let todos = state.todos;
            let index = todos.findIndex(obj => obj.id === payload)
            todos[index] = {...todos[index], status: !todos[index].status}
            console.log({
                ...state,
                todos,
            });
            
            return {
                ...state,
                todos: []
            };

        default: 
        return state;
    }
}