import React from 'react'
import { WingBlank, List, InputItem, Button, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../components/Logo'
import RcForm from '../components/RcForm'
import { login } from '../redux/user.redux'

@connect(state => state.user, {login})
@RcForm
export default class LoginPage extends React.PureComponent {
    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {
            username: '',
            password: '',
        }
    }

    //跳转到注册页面
    goToRegisterPage () {
        this.props.history.push('/register')
    }

    //登录
    login () {
        this.props.login(this.props.formData)
    }

    render () {
        const {errorMessage, redirectTo} = this.props

        return <React.Fragment>
            {redirectTo ? <Redirect to={redirectTo}/> : null}
            <Logo/>
            <WingBlank>
                {errorMessage
                    ? <p className='error-message'>{errorMessage}</p>
                    : null}
                <List>
                    <InputItem
                        type='text'
                        maxLength={20}
                        placeholder="请输入用户名"
                        clear
                        onChange={(value) => {
                            this.props.handleChange('username', value)
                        }}
                    >用户名</InputItem>
                    <InputItem
                        maxLength={30}
                        type='password'
                        placeholder="请输入密码"
                        clear
                        onChange={(value) => {
                            this.props.handleChange('password', value)
                        }}
                    >密码</InputItem>
                </List>
                <WhiteSpace/>
                <Button type="ghost" onClick={this.login.bind(this)}>登录</Button>
                <WhiteSpace/>
                <Button type="primary"
                        onClick={this.goToRegisterPage.bind(
                            this)}>点击立即注册！</Button>
            </WingBlank>
        </React.Fragment>
    }
}