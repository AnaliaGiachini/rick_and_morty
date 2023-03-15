
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './action-types'

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {}
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return ({
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors: {}
      })

    case DELETE_FAVORITE:
      return ({
        ...state,
        myFavorites: payload,
        errors: {}
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

    case 'GET_FAVS':
      return ({
        ...state,
        myFavorites: payload,
        errors: {}
      })
    case 'ERROR':
      return ({
        ...state,
        errors: payload
      })

    default:
      return ({ ...state })
  }
}

export default reducer
