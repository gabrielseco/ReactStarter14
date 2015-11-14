import films from '../api/films/index'
import * as types from '../constants/ActionTypes'

function receiveFilms(films) {
  return {
    type: types.RECEIVE_FILMS,
    films: films
  }
}

export function getAllFilms() {
  return dispatch => {
    films.getFilms(films => {
      dispatch(receiveFilms(films))
    })
  }
}
