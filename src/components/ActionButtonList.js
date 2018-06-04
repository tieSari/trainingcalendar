import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { updateCurrentEntryType } from './../reducers/DateReducer'
 

const ActionButtonList = (props) => (
    <div>
        <Table striped>
            <tbody>                 
                {props.actionEntries.map(entry =>
                    <tr key={entry.id}>
                        <td>
                            <button onClick={() => props.updateCurrentEntryType(entry.type)}>{entry.type}</button>
                        </td>
                    </tr>
                )}                   
            </tbody>
        </Table>
    </div>
)

const mapStateToProps = (state) => {
    return {
        actionEntries: state.actionEntries
    }
}

export default connect(
    mapStateToProps,
    {updateCurrentEntryType }
)(ActionButtonList)