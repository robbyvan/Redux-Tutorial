import React from 'react'
import { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class UserList extends Component {

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{user.first} {user.last}</li>
      );
    });
  }

  render(){
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }

}

function mapStateToProps (state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
