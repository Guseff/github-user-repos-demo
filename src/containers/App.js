import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Users from '../components/Users'
import Reposes from '../components/Reposes'
import * as userActions from '../actions/userActions'

class App extends Component {
  render() {
    const { users, reposes, setUser, listRepos, goRepos } = this.props;

    return <div className='ui container'>
      <h1>Title of Test</h1>
      <div className='ui grid'>
        <Users names={users.names} setUser={setUser} listRepos={listRepos} goRepos={goRepos} selected={users.selected} />
        <Reposes reposes={reposes.reposes} listRepos={listRepos} />
      </div>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    reposes: state.reposes,
    selected: state.selected
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUser: bindActionCreators(userActions.newSetUser, dispatch),
    listRepos: bindActionCreators(userActions.listRepos, dispatch),
    goRepos: bindActionCreators(userActions.goRepos, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)