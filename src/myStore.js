import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from './rootSaga'
import accountReducers from './features/account/reducers'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        account: accountReducers,
    })

    return configureStore(rootReducer, rootSaga)
}