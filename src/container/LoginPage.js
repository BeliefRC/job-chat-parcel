import React from 'react'
import { WingBlank, List, InputItem, Button, WhiteSpace } from 'antd-mobile'
import Logo from '../components/Logo/Logo'

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

    //设置各项字段到状态中
    handleChange (key, value) {
        this.setState({key: value})
    }

    //跳转到注册页面
    goToRegisterPage () {
        this.props.history.push('/register')
    }

    render () {
        return <div>
            <Logo/>
            <WingBlank>
                <List>
                    <InputItem
                        type='text'
                        maxLength={20}
                        placeholder="请输入用户名"
                        clear
                        onChange={(value) => {
                            this.handleChange('username', value)
                        }}
                    >用户名</InputItem>
                    <InputItem
                        maxLength={30}
                        type='password'
                        placeholder="请输入密码"
                        clear
                        onChange={(value) => {
                            this.handleChange('password', value)
                        }}
                    >密码</InputItem>
                </List>
                <WhiteSpace/>
                <Button type="ghost">登录</Button>
                <WhiteSpace/>
                <Button type="primary"
                        onClick={this.goToRegisterPage.bind(
                            this)}>点击立即注册！</Button>
            </WingBlank>
        </div>
    }
}