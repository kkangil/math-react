import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        <p>There is someting error.</p>
        <Link to="/">Main</Link>
      </div>
    )
  }
}

export default ErrorComponent