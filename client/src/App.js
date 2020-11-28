//Module Imports
import React from 'react';
import { Admin , Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

//File Imports
import PostList from './components/Posts/PostList';
import PostCreate from './components/Posts/PostCreate';
import PostEdit from './components/Posts/PostEdit';

import UserList from './components/Users/UserList';
import UserCreate from './components/Users/UserCreate';
import UserEdit from './components/Users/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name={'posts'}
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource 
        name={'users'}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
