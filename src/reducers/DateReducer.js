import entryService from '../services/DateEntryService'

const initalState = [
    { weekday: 'Monday',  id: 1, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':1}},
    { weekday: 'Tuesday', id: 2, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':2}},
    { weekday: 'Wednesday',  id: 3, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':3} },
    { weekday: 'Thursday',  id: 4, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':4} },
    { weekday: 'Friday',  id: 5, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':5} },
    { weekday: 'Saturday',  id: 6, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':6}},
    { weekday: 'Sunday',  id: 0, current: false, trainingItem:{'type': '', 'time': 0, 'dayId':0} },
]

const today =  new Date().getDay()

const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
    {
        console.log('item')
        return [...state, action.data]
    }
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
            data: initalState.map(day => day.trainingItem = entries.filter(p => p.dayId === day.id)[0])
        })
    }
}

export const dateEntryCreation = (item) => {
    return async (dispatch) => {
        const newItem = {...item, 'dayId':1,'week':20, 'year':2018}
        console.log(newItem, 'new item')
        const data = await entryService.createNew(newItem)
        console.log(data, 'data')
        dispatch({
            type: 'NEW_ENTRY',
            data
        })
    }
}
  
  
export default dateReducer