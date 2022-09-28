import React, { useEffect, useState } from 'react';
import * as axios from 'axios'
import { Users } from './User';

function App() {

  const [users, setUsers] = useState<Users>([])

  useEffect(()=>{
    // App.tsxのマウント時にユーザー情報を取得する
    const getUser = async () => {
      axios.default.get<Users>('https://jsonplaceholder.typicode.com/users').then((result) => {
        setUsers(result.data)
      })
    }
    getUser()
  },[])

  if (users.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
    {users.map((user)=>{
      return (
        <div key={user.id}>
          <p data-testid='id'>{user.id}</p>
          <p>{user.name}</p>
          <p></p>
        </div>
      )
    })}
    </>
  );
}

export default App;
