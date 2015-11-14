/**
 * Mocking client-server processing
 */
import _films from './data.json'
import axios from 'axios';


const TIMEOUT = 100

export default {
  getFilms(cb, timeout) {
    setTimeout(() => cb(_films), timeout || TIMEOUT)
  }
}
