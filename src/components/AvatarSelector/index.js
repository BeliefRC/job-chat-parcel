import React from 'react'
import PropTypes from 'prop-types'
import { List, Grid } from 'antd-mobile'
import path from 'path'

export default class AvatarSelector extends React.PureComponent {

    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {}
    }

    render () {
        const {icon, text} = this.state
        const {selectAvatar} = this.props
        let avatarList = [
            {
                icon: require('../../images/bear.png'),
                text: 'bear',
            }, {
                icon: require('../../images/bee.png'),
                text: 'bee',
            }, {
                icon: require('../../images/bird.png'),
                text: 'bird',
            }, {
                icon: require('../../images/cat.png'),
                text: 'cat',
            }, {
                icon: require('../../images/cow.png'),
                text: 'cow',
            }, {
                icon: require('../../images/dog.png'),
                text: 'dog',
            }, {
                icon: require('../../images/donkey.png'),
                text: 'donkey',
            }, {
                icon: require('../../images/duck.png'),
                text: 'duck',
            }, {
                icon: require('../../images/elephant.png'),
                text: 'elephant',
            }, {
                icon: require('../../images/fox.png'),
                text: 'fox',
            }, {
                icon: require('../../images/frog.png'),
                text: 'frog',
            }, {
                icon: require('../../images/giraffe.png'),
                text: 'giraffe',
            }, {
                icon: require('../../images/hippo.png'),
                text: 'hippo',
            }, {
                icon: require('../../images/koala.png'),
                text: 'koala',
            }, {
                icon: require('../../images/lion.png'),
                text: 'lion',
            }, {
                icon: require('../../images/monkey.png'),
                text: 'monkey',
            }, {
                icon: require('../../images/mouse.png'),
                text: 'mouse',
            }, {
                icon: require('../../images/owl.png'),
                text: 'owl',
            }, {
                icon: require('../../images/panda.png'),
                text: 'panda',
            }, {
                icon: require('../../images/penguin.png'),
                text: 'penguin',
            }, {
                icon: require('../../images/pig.png'),
                text: 'pig',
            }, {
                icon: require('../../images/rabbit.png'),
                text: 'rabbit',
            }, {
                icon: require('../../images/sheep.png'),
                text: 'sheep',
            }, {
                icon: require('../../images/tiger.png'),
                text: 'tiger',
            },
        ]
        const gridHeader = text ?
            <React.Fragment>
                <span>已选择头像  </span>
                <img src={icon} alt={text}
                     style={{width: 20, verticalAlign: 'bottom'}}/>
            </React.Fragment> :
            <span className='error-message'>请选择头像</span>
        return <List renderHeader={() => gridHeader}>
            <Grid data={avatarList}
                // isCarousel
                  columnNum={6}
                  onClick={elm => {
                      this.setState(elm)
                      selectAvatar(elm.text)
                  }}/>
        </List>
    }
}
AvatarSelector.propTypes = {
    selectAvatar: PropTypes.func.isRequired,
}