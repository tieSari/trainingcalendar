import React from 'react'

const TrainingItem = ({ item, addTrainingItem, deleteTrainingItem }) => {

    return (
        <div>
            <form onSubmit={addTrainingItem}>
                <input name="type" value={item != null && item.type} readOnly />
                <input name="time" value={item != null && item.time} readOnly />
                <button>Save</button>
            </form>
            <button onClick={deleteTrainingItem}>Delete</button>
        </div>
    )
}

export default TrainingItem