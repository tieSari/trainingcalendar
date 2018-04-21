import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import { Provider } from 'react-redux'
import dateReducer from './reducers/DateReducer'

const reducer = combineReducers({
    dates: dateReducer
})
  
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)