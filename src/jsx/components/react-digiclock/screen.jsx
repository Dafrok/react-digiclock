import React from 'react'
import Diode from './diode.jsx'

let letters={
  null:{
    top:false,
    middle:false,
    bottom:false,
    leftTop:false,
    leftBottom:false,
    rightTop:false,
    rightBottom:false
  },
  0:{
    top:true,
    middle:false,
    bottom:true,
    leftTop:true,
    rightTop:true,
    leftBottom:true,
    rightBottom:true
  },
  1:{
    top:false,
    middle:false,
    bottom:false,
    leftTop:false,
    leftBottom:false,
    rightTop:true,
    rightBottom:true

  },
  2:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:false,
    leftBottom:true,
    rightTop:true,
    rightBottom:false
  },
  3:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:false,
    leftBottom:false,
    rightTop:true,
    rightBottom:true
  },
  4:{
    top:false,
    middle:true,
    bottom:false,
    leftTop:true,
    leftBottom:false,
    rightTop:true,
    rightBottom:true
  },
  5:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:true,
    leftBottom:false,
    rightTop:false,
    rightBottom:true
  },
  6:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:true,
    leftBottom:true,
    rightTop:false,
    rightBottom:true
  },
  7:{
    top:true,
    middle:false,
    bottom:false,
    leftTop:false,
    leftBottom:false,
    rightTop:true,
    rightBottom:true
  },
  8:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:true,
    leftBottom:true,
    rightTop:true,
    rightBottom:true
  },
  9:{
    top:true,
    middle:true,
    bottom:true,
    leftTop:true,
    leftBottom:false,
    rightTop:true,
    rightBottom:true
  },
}

let ScreenNumber=React.createClass({
  render:function(){
    return (<div className='screen'>
      <Diode position='top horizontal' isShow={this.state.top?true:false} />
      <Diode position='middle horizontal' isShow={this.state.middle?true:false} />
      <Diode position='bottom horizontal' isShow={this.state.bottom?true:false} />
      <Diode position='left top vertical' isShow={this.state.leftTop?true:false} />
      <Diode position='right top vertical' isShow={this.state.rightTop?true:false} />
      <Diode position='left bottom vertical' isShow={this.state.leftBottom?true:false} />
      <Diode position='right bottom vertical' isShow={this.state.rightBottom?true:false} />
    </div>)
  },
  getInitialState:function(){
    return letters[this.props.letter||'null']
  },
  componentWillReceiveProps:function(props){
    this.setState(letters[props.letter||'null'])
  }
})

let ScreenColon=React.createClass({
  render:function(){
    return (<div className='screen-colon'></div>)
  }
})

export default {ScreenNumber:ScreenNumber,ScreenColon:ScreenColon}