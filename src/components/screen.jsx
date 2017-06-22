import React from 'react'
import Diode from './diode.jsx'
import dict from '@/dict.js'

export class ScreenNumber extends React.Component{
  constructor (props) {
    super()
    this.state = dict[props.letter || 'null']
  }
  componentWillReceiveProps (props) {
    this.setState(dict[props.letter || 'null'])
  }
  render () {
    return <div className='screen'>
      <Diode position='top horizontal' isShow={this.state.top} />
      <Diode position='middle horizontal' isShow={this.state.middle} />
      <Diode position='bottom horizontal' isShow={this.state.bottom} />
      <Diode position='left top vertical' isShow={this.state.leftTop} />
      <Diode position='right top vertical' isShow={this.state.rightTop} />
      <Diode position='left bottom vertical' isShow={this.state.leftBottom} />
      <Diode position='right bottom vertical' isShow={this.state.rightBottom} />
    </div>
  }
}

export class ScreenColon extends React.Component {
  render () {
    return <div className='screen-colon'></div>
  }
}