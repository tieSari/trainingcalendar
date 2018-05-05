import React from 'react'
import DateEntryList from './components/DateEntryList'
import ActionButtonList from './components/ActionButtonList'
import { connect } from 'react-redux'
import { initializeDateEntries }  from './reducers/DateReducer'
import { initializeActionEntries }  from './reducers/ActionReducer'
import { Grid, Col, Row } from 'react-bootstrap'

class App extends React.Component {
    componentWillMount()
    {
        this.props.initializeDateEntries()
        this.props.initializeActionEntries()
    }

    render() {
        return (
            <div className="container">
                <Grid>
                    <Row>
                        <h1>Training Diary</h1>
                    </Row>
                    <Col xs={2} md={1}>
                        <ActionButtonList/>
                    </Col>

                    <Col xs={16} md={8}>                        
                        <div>
                            <DateEntryList/>
                        </div>
                    </Col>
                </Grid>
            </div>

        )
    }
}

export default connect(
    null,
    { initializeDateEntries, initializeActionEntries }
)(App)