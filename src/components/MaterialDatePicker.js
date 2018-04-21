import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import { connect } from 'react-redux'

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
class TrainingDatePicker extends React.Component {

    render(){
        
        return (
            <div>
                <DatePicker hintText="TrainingCalendar" container="inline" mode="landscape" onChange={() => this.props.dateEntryCreation()} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dates: state.dates
    }
}
const ConnectedDatePicker = connect(mapStateToProps)(TrainingDatePicker)
export default ConnectedDatePicker