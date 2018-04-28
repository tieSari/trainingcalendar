import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import dateReducer  from './reducers/DateReducer'


const reducer = combineReducers({
    dateEntries: dateReducer
    //notification: notificationReducer,
    //filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store