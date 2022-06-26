import { 
    DARK_MODE
} from './actionTypes'
export function darkModeAction(variable:any) {
    return { 
        type: DARK_MODE,
        payload: variable
    }
}