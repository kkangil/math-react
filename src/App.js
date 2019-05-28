import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Routes from './Routes'
import stores from './stores'

import ErrorComponent from '@/components/ErrorComponent'

import './styles/App.scss'

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Provider>
    )
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return <ErrorComponent />
    }
    // Normally, just render children
    return this.props.children;
  }
}
