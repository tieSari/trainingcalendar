import axios from 'axios'

const url = 'http://localhost:3001/entries'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNew = async (entry) => {
    console.log(entry, 'entry')
    const response = await axios.post(url,  entry)
    return response.data
}

export default {
    getAll, createNew
}