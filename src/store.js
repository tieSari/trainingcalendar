import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import dateReducer  from './reducers/DateReducer'
import actionReducer  from './reducers/ActionReducer'


const reducer = combineReducers({
    dateEntries: dateReducer,
    actionEntries: actionReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store