export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const GET_DATA_STARTED = 'GET_DATA_STARTED';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';

export const getDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: data
})

export const loadMoreDataSuccess = (data) => ({
    type: LOAD_DATA_SUCCESS,
    payload: data
})

export const getDataFailed = (error) => ({
    type: GET_DATA_FAILED,
    payload: error
})

export const getDataStarted = () => ({
    type: GET_DATA_STARTED
})