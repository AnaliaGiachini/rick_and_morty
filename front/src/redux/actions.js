
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './action-types'
import axios from 'axios'

export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      const respuestaDelBack = await axios.post('http://localhost:3001/favs/create', character)
      return dispatch({
        type: ADD_FAVORITE,
        payload: respuestaDelBack.data
      })
    } catch (error) {
      return dispatch({ type: 'ERROR', payload: error })
    }
  }
}

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete('http://localhost:3001/favs/delete/' + id)
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data
      })
    } catch (error) {
      return dispatch({ type: 'ERROR', payload: error })
    }
  }
}

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const response = await axios('http://localhost:3001/favs/get')
      return dispatch({ type: 'GET_FAVS', payload: response.data })
    } catch (error) {
      return dispatch({ type: 'ERROR', payload: error })
    }
  }
}

export const filterCards = (gender) => {
  return ({ type: FILTER, payload: gender })
}

export const orderCards = (id) => {
  return ({ type: ORDER, payload: id })
}
