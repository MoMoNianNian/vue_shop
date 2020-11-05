import axios from 'axios'

let localhost = 'http://localhost:8080'

export const getLoginMsg = data =>
  axios({
    url:`${localhost}/mock/json/login.json`,
    method: 'get',
    data
  })
