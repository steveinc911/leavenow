import {
    LOGIN
} from '../actions'

const initialState = {
    requesting: false,
    successful: false,
    data: []
}

function buildReducer( state = initialState, action, actionName ){

    switch ( action.type ) {
  
      case actionName.REQUEST:
        return { ...state, requesting: true, error: null }
  
      case actionName.SUCCESS:
        return { ...state, ...action.payload, requesting: false, success: true, error: null }
  
      case actionName.FAILURE:
        return { ...state, ...action.payload, requesting: false, success: false }
  
      default:
        return state
  
    }
  
  }

  export default function security ( state = {}, action ) {

    return {
        ...state,
        login: buildReducer( {
          success: true,
          errorMessage: '',
          errorCode: '',
          data: {
              authenticated: true,
              nickname: 'Steve',
          },
        }, action, LOGIN),
    }
  
  }

  
