import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

/* Import the components */
import AppliedRoute from './components/AppliedRoute'
import LoadingComponent from './components/LoadingComponent'

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: LoadingComponent
})

export default class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppliedRoute
            exact
            path="/"
            component={AsyncHome}
            props={this.props}
          />
        </Switch>
      </Router>
    )
  }
}
