/**
 * Mocking client-server processing
 */
import _TV from './data.json'


const TIMEOUT = 100

export default {
  getTV(cb, timeout) {
    setTimeout(() => cb(_TV), timeout || TIMEOUT)
  }
}
