import React from 'react'
import {ScreenNumber,ScreenColon} from './screen.jsx'

let Panel=React.createClass({
  render:function(){
    let letters=this.state.letters

    return (<div>
      <ScreenNumber letter={letters[0]}/>
      <ScreenNumber letter={letters[1]}/>
      <ScreenColon />
      <ScreenNumber letter={letters[2]}/>
      <ScreenNumber letter={letters[3]}/>
      <ScreenColon />
      <ScreenNumber letter={letters[4]}/>
      <ScreenNumber letter={letters[5]}/>
    </div>)
  },
  getInitialState:function(){
    return {letters:this.props.letters}
  },
  componentWillReceiveProps:function(props){
    this.setState({letters:props.letters})
  },
})

export default Panel