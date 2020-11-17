import axios from 'axios'

let localhost = 'http://localhost:8080'

export const getLoginMsg = data =>
  axios({
    url: `${localhost}/mock/json/login.json`,
    method: 'get',
    data
  })

export const getMenuList = data =>
  axios({
    url: `${localhost}/mock/json/menuList.json`,
    method: 'get',
    data
  })

  export const getUserList = data =>
  axios({
    url: `${localhost}/mock/json/UserList.json`,
    method: 'get',
    data
  })

  export const getUsers = data =>
  axios({
    url: `${localhost}/mock/json/users.json`,
    method: 'get',
    data
  })

  export const getEditUser = data =>
  axios({
    url: `${localhost}/mock/json/editUser.json`,
    method: 'get',
    data
  })

  export const getSubmitUser = data =>
  axios({
    url: `${localhost}/mock/json/submitUser.json`,
    method: 'get',
    data
  })
