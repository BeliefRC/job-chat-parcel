import React from 'react'
import {
    WingBlank,
    List,
    InputItem,
    Button,
    WhiteSpace,
    Radio,
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../redux/user.redux'
import Logo from '../components/Logo'

const RadioItem = Radio.RadioItem
@connect(state => state.user, {register})
export default class RegisterPage extends React.PureComponent {
    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            type: 'genius',
        }
    }

    //设置各项字段到状态中
    handleChange (key, value) {
        this.setState({[key]: value})
    }

    // 设置单选框值
    onChange (value) {
        this.setState({
            type: value,
        })
    };

    //注册按钮事件
    register () {
        this.props.register(this.state)
    }

    render () {
        //单选框数据
        const typeData = [
            {value: 'genius', label: '牛人'},
            {value: 'boss', label: 'BOSS'},
        ]
        const {type} = this.state
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
                    <InputItem
                        maxLength={30}
                        type='password'
                        placeholder="请确认密码"
                        clear
                        onChange={(value) => {
                            this.handleChange('repeatPassword', value)
                        }}
                    >确认密码</InputItem>
                </List>
                <WhiteSpace size='xs'/>
                <List>
                    {typeData.map(i => (
                        <RadioItem key={i.value}
                                   checked={type === i.value}
                                   onChange={() => this.onChange(
                                       i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </List>
                <WhiteSpace/>
                <Button type="primary"
                        onClick={this.register.bind(this)}>注册</Button>
            </WingBlank>
        </React.Fragment>
    }
}