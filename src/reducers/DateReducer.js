const initalState = [
    { content: 'uusi arvo1',  id: 1 },
    { content: 'uusi arvo2', id: 2 }
]
  
const dateReducer = (state = initalState, action) => {
    switch (action.type) {
    case 'NEW_ENTRY':
        return [...state, action.data]
    default:
        return state
    }
}
  
const generateId = () => Number((Math.random() * 1000000).toFixed(0))
  
export const dateEntryCreation = (content) => {
    return {
        type: 'NEW_ENTRY',
        data: {
            content,
            id: generateId()
        }
    }
}
  
  
export default dateReducer