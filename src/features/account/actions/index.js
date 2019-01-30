import { 
    createRequestTypes
 } from '../../../actions/constants'


console.log(typeof createRequestTypes)

export const LOGIN = createRequestTypes( 'LOGIN' )

console.log(JSON.stringify(LOGIN))
