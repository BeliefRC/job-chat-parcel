import React from 'react'
import {
    NavBar,
    InputItem,
    TextareaItem,
    WhiteSpace,
    Button,
} from 'antd-mobile'
import { connect } from 'react-redux'
import AvatarSelector from '../components/AvatarSelector'
import { completeUserInfo } from '../redux/user.redux'
import RcForm from '../components/RcForm'

@connect(state => state.user, {completeUserInfo})
@RcForm
export default class GeniusInfo extends React.PureComponent {
    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {}
    }

    //选择头像
    selectAvatar (imageName) {
        this.setState({avatar: imageName})
    }

    render () {
        const {completeUserInfo, handleChange, formData} = this.props
        return <React.Fragment>
            <NavBar mode="dark">牛人完善信息页面</NavBar>
            <AvatarSelector selectAvatar={this.selectAvatar.bind(this)}/>
            <InputItem onChange={(v) => {
                handleChange('position', v)
            }}>
                求职岗位
            </InputItem>
            <TextareaItem title="个人简介" rows={3} autoHeight onChange={(v) => {
                handleChange('description', v)
            }}/>
            <WhiteSpace/>
            <Button type='primary' onClick={() => {
                completeUserInfo({...formData, ...this.state})
            }}>保存</Button>
        </React.Fragment>
    }
}