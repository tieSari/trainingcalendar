import axios from 'axios'

const url = 'http://localhost:3001/entries'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNew = async (content) => {
    const response = await axios.post(url, { content})
    return response.data
}

export default {
    getAll, createNew
}