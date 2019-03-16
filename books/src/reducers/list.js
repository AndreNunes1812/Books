const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false,
    totalElements: 0 ,
    inputQuery: null 
}

const list = (state = INITIAL_STATE, action) => {

    console.log('reducer:',action.type)
    console.log('reducer value:',action)
    
    switch(action.type) {
        case "LOAD_DATA_REQUEST":
            return {
                ...state,
                inputQuery: action.inputQuery,
                maxResults: action.maxResults
            }
        case "LOAD_DATA_SUCCESS":
            return {
                ...state,
                data: action.data,
                totalElements: action.totalElements
            };
        case "LOAD_DATA_FOOTER":
            return {
                ...state,
                refreshing: false,
                loading: true
            };
        default:
            return state;
    }
}

export default list