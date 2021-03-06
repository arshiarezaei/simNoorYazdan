import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from '../constants/asyncConstants'
import { createReducer } from '../../common/util/reducerUtil'


const initialState = {
    loading: false
}

export const asyncActionStart = state => {
    return { ...state, laoding: true }
}

export const asyncActionFinish = state => {
    return { ...state, laoding: false }
}

export const asyncActionError = state => {
    return { ...state, loading: false }
}


export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStart,
    [ASYNC_ACTION_FINISH]: asyncActionFinish,
    [ASYNC_ACTION_ERROR]: asyncActionError
})
