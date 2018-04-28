import React from 'react'
import { dateEntryCreation } from './../reducers/DateReducer'
import { connect } from 'react-redux'

class DateEntryForm extends React.Component {

  addDateEntry = (event) => {
      event.preventDefault()
      this.props.dateEntryCreation(event.target.entry.value)
      event.target.note.value = ''
  }

  render() {
      return (
          <form onSubmit={this.addDateEntry}>
              <input name="entry" />
              <button>lisää</button>
          </form>
      )
  }
}

export default connect(
    null,
    { dateEntryCreation }
)(DateEntryForm)