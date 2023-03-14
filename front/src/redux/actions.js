
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './action-types'
import axios from 'axios'

export const addFavorite = (character) => {
  return function (dispatch) {
    axios.post('http://localhost:3001/favs/create', character)
      .then((response) => {
        return dispatch({
          type: ADD_FAVORITE,
          payload: response.data
        })
      })
  }
}

export const deleteFavorite = (id) => {
  return function (dispatch) {
    axios.delete('http://localhost:3001/favs/delete/' + id)
      .then((response) => {
        return dispatch({
          type: DELETE_FAVORITE,
          payload: response.data
        })
      })
  }
}

export const filterCards = (gender) => {
  return ({ type: FILTER, payload: gender })
}

export const orderCards = (id) => {
  return ({ type: ORDER, payload: id })
}
