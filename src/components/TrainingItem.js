import React from 'react'

const TrainingItem = ({ item, addTrainingItem }) => {

    //  if(item != null)
    return (
        <div>
            <form onSubmit={addTrainingItem}>
                <input name="type" placeholder={item != null && item.type} />
                <input name="time" placeholder={item != null && item.time} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default TrainingItem