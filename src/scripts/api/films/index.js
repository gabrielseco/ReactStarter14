/**
 * Mocking client-server processing
 */
import _films from './data.json'


const TIMEOUT = 100

export default {
  getFilms(cb, timeout) {
    setTimeout(() => cb(_films), timeout || TIMEOUT)
  }
}
