import React from 'react'

const DateEntry = ({ dateEntry }) => {
    return (
        <div>
            <strong> {dateEntry.weekday} </strong>
        </div>
    )
}

export default DateEntry