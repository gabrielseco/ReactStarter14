import films from '../api/films/index'
import TV from '../api/tv'
import * as types from '../constants/ActionTypes'

function receiveFilms(films) {
  return {
    type: types.RECEIVE_FILMS,
    films: films
  }
}

function receiveTV(TV) {
  return {
    type: types.RECEIVE_TV,
    TV: TV
  }
}

export function getAllFilms() {
  return dispatch => {
    films.getFilms(films => {
      dispatch(receiveFilms(films))
    })
  }
}

export function getAllTV() {
  return dispatch => {
    TV.getTV(TV => {
      dispatch(receiveTV(TV))
    })
  }
}
