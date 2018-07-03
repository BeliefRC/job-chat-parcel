import React from 'react'

export default Component =>
    class RcForm extends React.PureComponent {
        // 构造
        constructor (props) {
            super(props)
            // 初始状态
            this.state = {}
        }

        //设置各项字段到状态中
        handleChange (key, value) {
            this.setState({[key]: value})
        }

        render () {
            return <Component
                formData={this.state}
                {...this.props}
                handleChange={this.handleChange.bind(this)}/>
        }
    }
