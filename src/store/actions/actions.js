import {SET_FAVORITE_CAT, REMOVE_FAVORITE_CAT} from '../constants/constats'

export const setFavoritesCatsAC = (payload) => {
    return {type: SET_FAVORITE_CAT, payload}
}
export const removeFavoriteCatAC = (payload) => {
    return {type: REMOVE_FAVORITE_CAT, payload}
}
