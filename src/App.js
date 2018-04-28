import React from 'react'
//import MaterialDatePicker from './components/MaterialDatePicker'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DateEntryList from './components/DateEntryList'
import { connect } from 'react-redux'
import { initializeDateEntries }  from './reducers/DateReducer'

class App extends React.Component {
    componentWillMount()
    {
        this.props.initializeDateEntries()
    }  

    render() {
        return (
            <div className="container">
                <h1>Training Diary</h1>
                <div>
                    <DateEntryList/>
                </div>
            </div>

        )
    }
}

export default connect(
    null,
    { initializeDateEntries }
)(App)