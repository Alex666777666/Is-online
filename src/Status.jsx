import React from 'react'
import Online from './Online.jsx'
import Offline from './Offline.jsx'

const Greeting = props => {
  if (props.isOnline) {
    return <Online />
  }
  return <Offline />
}

export default Greeting
