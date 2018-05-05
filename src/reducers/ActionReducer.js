const initalState = [
    { type: 'Running',  id: 1},
    { type: 'Spinning', id: 2},
    { type: 'Gym',  id: 3},
    { type: 'Circuit',  id: 4},
    { type: 'Orienteering',  id: 5 },
]


const actionReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
        return [...state, action.data]
    case 'INIT_ENTRIES':
    {
        return state
    }
    default:
        return state
    }
}
 
export const initializeActionEntries = () => {
    return async (dispatch) => {
        // const notes = await noteService.getAll()
        dispatch({
            type: 'INIT_ENTRIES',
            data: initalState
        })
    }
}

export const actionEntryCreation = (item) => {
    return {
        type: 'NEW_ENTRY',
        data: {
            item
        }
    }
}
  
  
export default actionReducer