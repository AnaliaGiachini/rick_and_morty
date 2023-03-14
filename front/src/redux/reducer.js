
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './action-types'

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return ({
        ...state,
        myFavorites: payload,
        allCharacters: payload
      })

    case DELETE_FAVORITE:
      return ({
        ...state,
        myFavorites: payload
      })

    case FILTER:
      return ({
        ...state,
        myFavorites: state.allCharacters.filter(char => char.gender === payload)
      })

    case ORDER:
      return ({
        ...state,
        myFavorites:
          payload === 'Ascendente'
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id)
      })

    default:
      return ({ ...state })
  }
}

export default reducer
