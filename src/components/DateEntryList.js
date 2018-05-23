import React from 'react'
import { connect } from 'react-redux'
import DateEntry from './DateEntry'
import { Table } from 'react-bootstrap'
import { dateEntryCreation } from './../reducers/DateReducer'
import TrainingItem from './TrainingItem' 
//import RenderToLayer from 'material-ui/internal/RenderToLayer'


class DateEntryList extends React.Component { 

    addItem = async (event) => {
        
        event.preventDefault()
        const type = event.target.type.value
        console.log(type)
        const time = event.target.time.value
        const item = {type:type, time:time}
        console.log(item)
        this.props.dateEntryCreation(item)
     
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
                                        addTrainingItem={this.addItem}/>
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
    {dateEntryCreation }
)(DateEntryList)