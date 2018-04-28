import React from 'react'
import { connect } from 'react-redux'
import DateEntry from './DateEntry'
import { Table } from 'react-bootstrap'

const DateEntryList = (props) => (
    <div>
        <Table striped>
            <tbody>
                <tr>                  
                    {props.dateEntries.map(entry =>
                        <td>
                            <DateEntry
                                key = {entry.id}
                                dateEntry={entry}
                            />
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
    { }
)(DateEntryList)