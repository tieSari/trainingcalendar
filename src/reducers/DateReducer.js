import entryService from '../services/DateEntryService'
//import {getWeek} from '../modules/getWeek'

/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function (dowOffset) {
    /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.epoch-calendar.com */
    
    dowOffset = typeof(dowOffset) === 'int' ? dowOffset : 0 //default dowOffset to zero
    var newYear = new Date(this.getFullYear(),0,1)
    var day = newYear.getDay() - dowOffset //the day of week the year begins on
    day = (day >= 0 ? day : day + 7)
    var daynum = Math.floor((this.getTime() - newYear.getTime() - 
        (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1
    var weeknum
    //if the year starts before the middle of a week
    if(day < 4) {
        weeknum = Math.floor((daynum+day-1)/7) + 1
        if(weeknum > 52) {
            var nYear = new Date(this.getFullYear() + 1,0,1)
            var nday = nYear.getDay() - dowOffset
            nday = nday >= 0 ? nday : nday + 7
            /*if the next year starts before the middle of
                   the week, it is week #1 of that year*/
            weeknum = nday < 4 ? 1 : 53
        }
    }
    else {
        weeknum = Math.floor((daynum+day-1)/7)
    }
    return weeknum
}
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
const thisWeek =  new Date().getWeek(1)
const thisYear =  new Date().getFullYear()

const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ITEM':
    {
        console.log(action.data, 'new item')
        const currentEntry = state.find(d => d.current === true)
        const newEntry = {...currentEntry, trainingItem : action.data}
        console.log(newEntry, 'new entry')
        return state.map(entry => entry.current === false ? entry : newEntry )
    }
    case 'DELETE_CURRENT':
    {
        const currentEntry = state.find(d => d.current === true)
        console.log(currentEntry, 'current entry')
        const deletedEntry = {...currentEntry, trainingItem : {...currentEntry.trainingItem, type: '', time: 0, id:null}}
        console.log(deletedEntry, 'deleted entry')
        return state.map(entry => entry.current === false ? entry : deletedEntry )
    }
    case 'UPDATE_CURRENT':
    {
        // const currentEntry = state.find(d => d.current === true)
        // console.log(currentEntry, 'current entry')
        // const changedEntry = {...currentEntry, trainingItem : {...currentEntry.trainingItem, type : action.data}}
        // console.log(changedEntry, 'changed entry')
        // return state.map(entry => entry.current === false ? entry : changedEntry )
        return state
    }
    case 'UPDATE_CURRENT_TYPE':
    {
        const currentEntry = state.find(d => d.current === true)
        console.log(currentEntry, 'current entry')
        const changedEntry = {...currentEntry, trainingItem : {...currentEntry.trainingItem, type : action.data}}
        console.log(changedEntry, 'changed entry')
        return state.map(entry => entry.current === false ? entry : changedEntry )
    }
    case 'INIT_ENTRIES':
    // return action.data
    {
        state.map(day => day.trainingItem = 
            action.data.filter(p => p.dayId === day.id)[0])

        const currentDay = state.find(d => d.id === today)
        console.log(currentDay, 'current')
        const changedDay = {...currentDay, current : true}
        console.log(changedDay, 'changed')
        return state.map(day => day.id !== today ? day : changedDay )
    }
    default:
        return state
    }
}


//const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const deleteCurrentEntry = (item) => {
    return async (dispatch) => {
        if(item.id)
        {
            const data = await entryService.deleteItem(item)
            console.log(data, 'deleted data')
        }
        dispatch({
            type: 'DELETE_CURRENT'

        })
    }
}

export const updateCurrentEntry = (item) => {
    return async (dispatch) => {
        const data = await entryService.update(item)
        console.log(data, 'updated data')
        dispatch({
            type: 'UPDATE_CURRENT',
            data: data
        })
    }
}
export const updateCurrentEntryType = (trainingType) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_CURRENT_TYPE',
            data: trainingType
        })
    }
}

export const initializeDateEntries = () => {
    return async (dispatch) => {
        const entries = await entryService.getAll(thisWeek, thisYear)
        console.log(entries, 'entries')
        dispatch({
            type: 'INIT_ENTRIES',
            data: entries
        })
    }
}

export const dateEntryCreation = (item) => {
    return async (dispatch) => {
        const newItem = {...item, 'dayId':today,'week': thisWeek, 'year':thisYear}
        console.log(newItem, 'new item')
        const data = await entryService.createNew(newItem)
        console.log(data, 'data')
        dispatch({
            type: 'NEW_ITEM',
            data: data
        })
    }
}
  
  
export default dateReducer