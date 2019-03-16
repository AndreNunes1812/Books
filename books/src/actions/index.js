export const loadDataRequest = (inputQuery, maxResults) => {
    console.log('Daya Request:',inputQuery)
    console.log('MaxResults Request:',maxResults)
    
    return {
        type: "LOAD_DATA_REQUEST",
        inputQuery,
        maxResults
    }
}

export const loadDataSuccess = (data , totalElements) => {
    return {
        type: "LOAD_DATA_SUCCESS",
        data,
        totalElements
    }
}

export const loadDataFooter = () => {
    return {
        type: "LOAD_DATA_FOOTER"
    }
}