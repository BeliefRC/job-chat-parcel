import axios from 'axios'

const initState = {
    username: '',
    type: '',
    errorMessage: '',
}
const LOGIN = 'LOGIN'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'

//错误信息，actionCreator
const makeErrorMessage = (msg) => ({
    msg,
    type: ERROR_MSG,
})

//reducer
export function user (state = initState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, errorMessage: action.msg}
        default:
            return state
    }
}

//加载用户信息
export function loadData (userInfo) {
    return {type: LOAD_DATA, payload: userInfo}
}

//注册
export function register ({username, password, confirmPassword, type}) {
    return dispatch => {
        //表单验证
        if (!username || !password) {
            return dispatch(makeErrorMessage('用户名密码必须输入！'))
        }
        if (password !== confirmPassword) {
            return dispatch(makeErrorMessage('两次密码输入不一致！'))
        }
        //验证通过后向后端发送请求
        axios.get('http://localhost:9093/user/info')

    }
}

