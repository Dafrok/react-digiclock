import React from 'react'
import '../../../stylus/components/react-digiclock/main.styl'
import Panel from './panel.jsx'

let DigiClock=React.createClass({
  render:function(){
    return (<div className='react-digiclock'>
      <Panel letters={this.state.letters}/>
    </div>)
  },
  getInitialState:function(){
    return {letters:''}
  },
  componentDidMount:function(){
    let __self=this
    setInterval(function(){__self.setState({letters:__self.setDatetime()})},1000)
  },
  setDatetime:function(){
    return Date().split(' ')[4].replace(/:/g,'')
  }
})

export default DigiClock