import { getDataFailed, getDataStarted, getDataSuccess, loadMoreDataSuccess } from "../actionCreators/data"
import { api } from "../../api/index";

export const fetchData = URL => {
    return async (dispatch) => {
        console.log(URL)
        try {
            dispatch(getDataStarted);
            const response = await api.data.getData({
                params: {
                }
            }, URL)
            dispatch(getDataSuccess(response.data))
        } catch (error) {
            console.log(error)
            dispatch(getDataFailed(error))
        }
    }
}

export const loadMoreData = URL => {
    return async dispatch => {
        console.log(URL)
        try {
            dispatch(getDataStarted);
            const response = await api.data.getData({
                params: {
                }
            }, URL)
            dispatch(loadMoreDataSuccess(response.data))
        } catch (error) {
            console.log(error)
            dispatch(getDataFailed(error))
        }
    };
  };