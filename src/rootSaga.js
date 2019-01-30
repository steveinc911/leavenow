import { fork, all } from 'redux-saga/effects'

import account from './features/account/sagas'

function* rootSaga() {

    yield all( [
      fork( account ),
    ] )
  
  }
  
  export default rootSaga

