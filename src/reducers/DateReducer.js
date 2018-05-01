const initalState = [
    { weekday: 'Monday',  id: 1, trainingItem:{type: 'juoksu', time: 60, dayId:1, week:20, year:2018}},
    { weekday: 'Tuesday', id: 2 },
    { weekday: 'Wednesday',  id: 3 },
    { weekday: 'Thursday',  id: 4 },
    { weekday: 'Friday',  id: 5 },
    { weekday: 'Saturday',  id: 6, trainingItem:{type: 'juoksu', time: 60, dayId:6, week:20, year:2018}},
    { weekday: 'Sunday',  id: 7 },
]
  
const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
        return [...state, action.data]
    case 'INIT_ENTRIES':
        // return action.data
        return state
    default:
        return state
    }
}
  
const generateId = () => Number((Math.random() * 1000000).toFixed(0))
 
export const initializeDateEntries = () => {
    return async (dispatch) => {
        // const notes = await noteService.getAll()
        dispatch({
            type: 'INIT_ENTRIES',
            data: initalState
        })
    }
}

export const dateEntryCreation = (item) => {
    return {
        type: 'NEW_ENTRY',
        data: {
            item,
            id: generateId()
        }
    }
}
  
  
export default dateReducer