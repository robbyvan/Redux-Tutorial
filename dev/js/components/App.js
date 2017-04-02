import React from 'react'

import UserList from './../containers/UserList.js'
import UserDetail from './../containers/UserDetail.js'

require('../../scss/style.scss');

const App = () => {
  return (
    <div>
      <h2>Username List:</h2>
      <UserList />
      <hr/>
      <h2>User Details</h2>
      <UserDetail />
    </div>
  )
};

export default App;