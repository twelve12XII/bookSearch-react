import { GET_DATA_FAILED, GET_DATA_STARTED, GET_DATA_SUCCESS, LOAD_DATA_SUCCESS } from "../actionCreators/data"

const defaultState = {
    data: [],
    isDataLoading: true
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DATA_STARTED:
            return {
                ...state,
                isDataLoading: true
            }

        case LOAD_DATA_SUCCESS:
            console.log(state.data)
            return {
                ...state,
                data: [...state.data, ...action.payload.items]
            }

        case GET_DATA_FAILED:
            return {
                ...state,
                isDataLoading: false
            }

        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.items,
                isDataLoading: false
            }

        default: {
            return {
                ...state
            }
        }
    }
}