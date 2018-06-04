import axios from 'axios'

const url = 'http://localhost:3001/entries'

const getAll = async (thisWeek, thisYear) => {
    const response = await axios.get(`${url}?year=${thisYear}&week=${thisWeek}`)
    return response.data
}

const createNew = async (entry) => {
    console.log(entry, 'entry')
    const response = await axios.post(url,  entry)
    return response.data
}

const update = async (entry) => {
    console.log(entry, 'entry to be updated')
    const response = await axios.patch(`${url}/${entry.id}`, {'type':entry.type})
    return response.data
}

const deleteItem = async (entry) => {
    console.log(entry, 'entry to be deleted')
    const response = await axios.delete(`${url}/${entry.id}`)
    return response.data
}

export default {
    getAll, createNew, update, deleteItem
}