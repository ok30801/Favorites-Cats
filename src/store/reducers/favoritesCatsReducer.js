import {REMOVE_FAVORITE_CAT, SET_FAVORITE_CAT} from '../constants/constats'

const initialState = {
    favoritesCats: []
}

export default function favoritesCatsReducer(state = initialState, action) {

    switch (action.type) {
        case SET_FAVORITE_CAT: {

            const stateCopy = {...state}
            stateCopy.favoritesCats = [...stateCopy.favoritesCats]

            const favoritesCat = stateCopy.favoritesCats.find(cat => cat.id === action.payload.id)
            const remoteCat = stateCopy.favoritesCats.findIndex(cat => cat.id === action.payload.id)

            !favoritesCat ? stateCopy.favoritesCats.push(action.payload) : stateCopy.favoritesCats.splice(remoteCat, 1)
            return stateCopy
        }
        case REMOVE_FAVORITE_CAT: {
            return {
                ...state,
                favoritesCats: [...state.favoritesCats.filter(el => el.id !== action.payload)]
            }
        }
        default:
            return state
    }
}





