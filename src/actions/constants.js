export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const SET = 'SET'
export const UPDATE = 'UPDATE'

export const createRequestTypes = ( base, optional = [] ) => {
    return [ REQUEST, SUCCESS, FAILURE, ...optional ].reduce( ( acc, type ) => (
      { [type]: `${base}_${type}`, ...acc }
    ), {} )
  }

export default {
  createRequestTypes,
}