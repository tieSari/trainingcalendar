import React from 'react'

const DateEntry = ({ dateEntry }) => {
    if(dateEntry.current === true)
    {
        return (
            <div>
                <strong> {dateEntry.weekday} </strong>
            </div>
        )
    }
    return (
        <div>
            {dateEntry.weekday}
        </div>
    )
}

export default DateEntry