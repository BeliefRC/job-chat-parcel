/** 2018/7/2
*作者:BeliefRC
*功能: 页面logo
*/
import React from 'react'
import LogoSVG from '../../Chat.svg'
import './style.less'

export default class Logo extends React.PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return <div className='logo-container'>
            <img src={LogoSVG} alt="LOGO"/>
        </div>
    }
}