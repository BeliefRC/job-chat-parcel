import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../utils'

const initState = {
    username: '',
    type: '',
    errorMessage: '',
    avatar: '',
    redirectTo: '',
}
const LOGIN = 'LOGIN'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'
const OPERATE_SUCCESS = 'OPERATE_SUCCESS'

//生成错误信息，actionCreator
const makeErrorMessage = (msg) => ({
    msg,
    type: ERROR_MSG,
})

const success = (data) => ({
    payload: data,
    type: OPERATE_SUCCESS,
})

//reducer
export function user (state = initState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, errorMessage: action.msg}
        case OPERATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                redirectTo: getRedirectPath(action.payload.type,
                    action.payload.avatar),
            }
        default:
            return state
    }
}

//加载用户信息
export function loadData (userInfo) {
    return {type: LOAD_DATA, payload: userInfo}
}

//登录
export function login ({username, password}) {
    return async dispatch => {
        //表单验证
        if (!username || !password) {
            return dispatch(makeErrorMessage('用户名密码必须输入！'))
        }
        const res = await axios.post('/user/login', {username, password})
        if (res.status === 200 && res.data.success) {
            dispatch(success(res.data.backData))
            Toast.success('登录成功!', 3, f => f, false)
        } else {
            dispatch(makeErrorMessage(res.data.msg))
        }
    }
}

//注册
export function register ({username, password, repeatPassword, type}) {
    return async dispatch => {
        //表单验证
        if (!username || !password) {
            return dispatch(makeErrorMessage('用户名密码必须输入！'))
        }
        if (password !== repeatPassword) {
            return dispatch(makeErrorMessage('两次密码输入不一致！'))
        }
        //验证通过后向后端发送请求
        const res = await axios.post('/user/register',
            {username, password, type})
        //请求并且注册成功
        if (res.status === 200 && res.data.success) {
            dispatch(success(res.data.backData))
            Toast.success('注册成功!', 3, f => f, false)
        } else {
            dispatch(makeErrorMessage(res.data.msg))
        }
    }
}

export function completeUserInfo ({avatar, position, company, salary, description}) {
    return async dispatch=>{
        console.log(avatar, position, company, salary, description);
        return dispatch(makeErrorMessage('用户名密码必须输入！'))
    }
}

