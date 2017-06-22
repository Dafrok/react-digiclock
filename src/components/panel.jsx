import React from 'react'
import {ScreenNumber,ScreenColon} from './screen.jsx'

export default class Panel extends React.Component {
  constructor (props) {
    super()
    this.state = {
      letters: props.letters
    }
  }
  componentWillReceiveProps (props) {
    console.log(props)
    this.setState({letters: props.letters})
  }
  render () {
    const letters = this.state.letters
    return <div>
      <ScreenNumber letter={letters[0]}/>
      <ScreenNumber letter={letters[1]}/>
      <ScreenColon />
      <ScreenNumber letter={letters[2]}/>
      <ScreenNumber letter={letters[3]}/>
      <ScreenColon />
      <ScreenNumber letter={letters[4]}/>
      <ScreenNumber letter={letters[5]}/>
    </div>
  }
}