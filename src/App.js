//import AnecdoteForm from './components/AnecdoteForm'
//import AnecdoteList from './components/AnecdoteList'
//import Filter from './components/Filter'
import React from 'react'
import { connect } from 'react-redux'
//import { anecdotesInitialization }  from './reducers/anecdoteReducer'

class App extends React.Component {
  componentDidMount =  () => {
  //  this.props.anecdotesInitialization()
  }

  render() {
      return (
          <div>
              <h1>Training Diary</h1>
          </div>
      )
  }
}

export default connect(
    null,
//  { anecdotesInitialization }
)(App)