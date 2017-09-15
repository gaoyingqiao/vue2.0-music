/**
 * Created by gyq on 2017/7/6.
 */
// 封装jsonp
import originJSONP from 'jsonp'

export default  function jsonp(url, data, option) {
  // 判断url第一个是？还是&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}


function param(data) {
  // 进行url地址拼接
  let url =''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
