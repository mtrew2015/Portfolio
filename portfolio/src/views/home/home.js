import React, { Component } from 'react'
import Jumbotron from '../Home/Jumbotron/Jumbotron'
import Feature from './FeatureSection/Feature';
export default class home extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <Feature/>
      </div>
    )
  }
}
