import React from 'react'
import '@/stylus/components/react-digiclock/main.styl'
import Panel from './panel.jsx'

export default class Clock extends React.Component {
  constructor (props) {
    super()
    this.state = {
      letters: ''
    }
    this.setDatetime = this.setDatetime.bind(this)
  }
  setDatetime () {
    return Date().split(' ')[4].replace(/:/g,'')
  }
  componentDidMount () {
    const {setDatetime} = this
    setInterval(() => {
      this.setState({
        letters: setDatetime()
      })
    }, 1000)
  }
  render () {
    return <div className='react-digiclock'>
      <Panel letters={this.state.letters}/>
    </div>
  }
}