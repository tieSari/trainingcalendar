import React from 'react'

const TrainingItem = ({ item, addTrainingItem }) => {

    return (
        <div>
            <form onSubmit={addTrainingItem}>
                <input name="type" value={item != null && item.type} readOnly />
                <input name="time" value={item != null && item.time} readOnly />
                <button>Save</button>
            </form>
        </div>
    )
}

export default TrainingItem