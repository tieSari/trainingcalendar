import React from 'react'
import { connect } from 'react-redux'
import DateEntry from './DateEntry'
import { Table } from 'react-bootstrap'
import { dateEntryCreation, updateCurrentEntry, deleteCurrentEntry } from './../reducers/DateReducer'
import TrainingItem from './TrainingItem' 
//import RenderToLayer from 'material-ui/internal/RenderToLayer'


class DateEntryList extends React.Component { 

    addItem = async (event) => {
        
        event.preventDefault()
        const currentEntry = this.props.dateEntries.find(d => d.current === true)
        console.log({currentEntry}, 'currentEntry in addItem')
        if(currentEntry.trainingItem.id)
        {
            this.props.updateCurrentEntry(currentEntry.trainingItem)
        }
        else
        {
            this.props.dateEntryCreation(currentEntry.trainingItem)
        }
     
    }
    deleteItem = async (event) => {
        
        event.preventDefault()
        const currentEntry = this.props.dateEntries.find(d => d.current === true)
        if(currentEntry.id)
        {
            this.props.deleteCurrentEntry(currentEntry)
        }
     
    }

    render(){
        return(

            <div>
                <Table striped>
                    <tbody>
                        <tr >                  
                            {this.props.dateEntries.map(entry =>
                                <td key={entry.id}>
                                    <DateEntry
                                        key = {entry.id}
                                        dateEntry={entry}
                                    />
                                    <TrainingItem 
                                        item={entry.trainingItem}
                                        addTrainingItem={this.addItem}
                                        deleteTrainingItem={this.deleteItem}/>
                                </td>
                            )}                   
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dateEntries: state.dateEntries
    }
}

export default connect(
    mapStateToProps,
    {dateEntryCreation, updateCurrentEntry, deleteCurrentEntry }
)(DateEntryList)