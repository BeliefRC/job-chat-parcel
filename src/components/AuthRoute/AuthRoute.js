/** 2018/7/2
 *作者:BeliefRC
 *功能: 验证登录信息组件
 */
import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@connect(null, {loadData})
@withRouter
export default class AuthRoute extends React.PureComponent {
    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {}
    }

    async componentWillMount () {
        //登录注册页面不需要验证
        const publicPath = ['/login', '/register']
        //获取当前页面路径
        const {pathname} = this.props.location
        if (!publicPath.includes(pathname)) {
            const res = await axios.get('http://localhost:9093/user/info')
            if (res.status === 200) {
                //存在信息则保存到redux，不存在则跳转到登录页
                if (res.data.backData) {
                    this.props.loadData(res.data.backData)
                } else {
                    this.props.history.push('/login')
                }
            }
        }
    }

    render () {
        return null
    }
}