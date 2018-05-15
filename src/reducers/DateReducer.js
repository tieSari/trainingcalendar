import entryService from '../services/DateEntryService'

const initalState = [
    { weekday: 'Monday',  id: 1, current: false, trainingItem:{}},
    { weekday: 'Tuesday', id: 2, current: false, trainingItem:{}},
    { weekday: 'Wednesday',  id: 3, current: false, trainingItem:{} },
    { weekday: 'Thursday',  id: 4, current: false, trainingItem:{} },
    { weekday: 'Friday',  id: 5, current: false, trainingItem:{} },
    { weekday: 'Saturday',  id: 6, current: false, trainingItem:{}},
    { weekday: 'Sunday',  id: 0, current: false, trainingItem:{} },
]

const today =  new Date().getDay()

const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
        return [...state, action.data]
    case 'UPDATE_CURRENT':
    {
        const currentEntry = state.find(d => d.current === true)
        console.log(currentEntry)
        const changedEntry = {...currentEntry, trainingItem : {...currentEntry.trainingItem, type : action.data}}
        console.log(changedEntry)
        return state.map(entry => entry.current === false ? entry : changedEntry )
    }
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
 
export const updateCurrentEntry = (trainingType) => {
    return async (dispatch) => {
        dispatch({
            type: 'UPDATE_CURRENT',
            data: trainingType
        })
    }
}

export const initializeDateEntries = () => {
    return async (dispatch) => {
        const entries = await entryService.getAll()
        dispatch({
            type: 'INIT_ENTRIES',
            data: initalState.map(day => day.trainingItem = entries.filter(p => p.dayId == day.id))
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