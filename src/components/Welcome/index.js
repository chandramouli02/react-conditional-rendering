// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false, text: 'Subscribe'}

  clicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      this.setState({isSubscribed: true, text: 'Subscribed'})
    } else {
      this.setState({isSubscribed: false, text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button-style" type="button" onClick={this.clicked}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
