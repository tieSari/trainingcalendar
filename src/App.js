import React from 'react'
import MaterialDatePicker from './components/MaterialDatePicker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//import { anecdotesInitialization }  from './reducers/anecdoteReducer'

class App extends React.Component {  

    render() {
        return (
            <div>
                <h1>Training Diary</h1>
                <div>
                    <MuiThemeProvider>
                        <MaterialDatePicker/>
                    </MuiThemeProvider>
                </div>
            </div>

        )
    }
}

export default App