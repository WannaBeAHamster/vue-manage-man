import http from '../utils/request'
export function getData() {
  return http.get('/home/getData')
}
