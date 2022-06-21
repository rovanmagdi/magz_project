import { IreducerActionsProps } from '../../types/reducerPropsAction'
import { LOGIN_USER_SUCCUSE, LOGOUT_USER, RESGISTER_USER_SUCCUSE } from '../actions/actionTypes'


export const userDataReducer = (state = null, { type, payload }: IreducerActionsProps) => {
    switch (type) {

        case LOGIN_USER_SUCCUSE:
            {
                return payload
            }
        case RESGISTER_USER_SUCCUSE:
            {
                return payload

            }

        case LOGOUT_USER: return (null)

        default: return state
    }


}