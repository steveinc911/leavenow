import { call, put } from 'redux-saga/effects'
import { login } from '../actions/security'



export function* loginSaga(api, action) {
    console.log('saga entered')
    try {
        const response = yield call(api.authenticate)
        console.log("response", response)
        if (response.success) {          
            yield put(login.success(response))
        } else {
            yield put(login.failure('Connection problems :('))
        }
    } catch (error) {
        yield put(login.failure(error.message))
    }
}