import React from 'react'
import { connect } from 'react-redux'
import DateEntry from './DateEntry'
import { Table } from 'react-bootstrap'
import { dateEntryCreation } from './../reducers/DateReducer'
import TrainingItem from './TrainingItem' 

const DateEntryList = (props) => (
    <div>
        <Table striped>
            <tbody>
                <tr >                  
                    {props.dateEntries.map(entry =>
                        <td key={entry.id}>
                            <DateEntry
                                key = {entry.id}
                                dateEntry={entry}
                            />
                            <TrainingItem 
                                item={entry.trainingItem}
                                onSubmit={() => props.dateEntryCreation(entry)}/>
                        </td>
                    )}                   
                </tr>
            </tbody>
        </Table>
    </div>
)


const mapStateToProps = (state) => {
    return {
        dateEntries: state.dateEntries
    }
}

export default connect(
    mapStateToProps,
    {dateEntryCreation }
)(DateEntryList)