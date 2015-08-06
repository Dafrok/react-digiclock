import React from 'react'

let Diode=React.createClass({
  render:function(){
    let props=this.props,state=this.state
    return (<div className={state.isShow?(props.position+' diode active'):(props.position+' diode')}></div>)
  },
  getInitialState:function(){
    return {isShow:this.props.isShow}
  },
  componentWillReceiveProps:function(props){
    this.setState({isShow:props.isShow})
  }
})

export default Diode