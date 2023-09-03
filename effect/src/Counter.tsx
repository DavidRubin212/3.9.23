import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [users, setUsers] = useState<user[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        })
      

    })
    
    interface user {
        id: number
        name:string
        email: string
    }

  return (
    <div> <h1>Users:</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
        </li>
      ))}
    </ul></div>
  )
}
