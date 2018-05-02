const initalState = [
    { weekday: 'Monday',  id: 1, current: false, trainingItem:{type: 'juoksu', time: 60, dayId:1, week:20, year:2018}},
    { weekday: 'Tuesday', id: 2, current: false},
    { weekday: 'Wednesday',  id: 3, current: false },
    { weekday: 'Thursday',  id: 4, current: false },
    { weekday: 'Friday',  id: 5, current: false },
    { weekday: 'Saturday',  id: 6, current: false, trainingItem:{type: 'juoksu', time: 60, dayId:6, week:20, year:2018}},
    { weekday: 'Sunday',  id: 0, current: false },
]

const today =  new Date().getDay()

const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
        return [...state, action.data]
    case 'INIT_ENTRIES':
    // return action.data
    {
        const currentDay = state.find(d => d.id === today)
        console.log(currentDay)
        const changedDay = {...currentDay, current : true}
        console.log(changedDay)
        return state.map(day => day.id !== today ? day : changedDay )
    }
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