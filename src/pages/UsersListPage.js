import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head() {
    return (
      <Helmet>
        <title>Users List Page Title</title>
        <meta property="og:title" content="Users List Page Title" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        Users List:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function loadData(store) {
  console.log('Try to Load data')
  return store.dispatch(fetchUsers())
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}