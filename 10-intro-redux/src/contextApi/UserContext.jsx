import React, { createContext } from 'react'


const user={
  name: "John Doe",
  email: "john@example.com",
  age: 25
}
const userContext = createContext(user);
export default function UserProvider({children}) {

  return (
    <userContext.Provider value={user}>
      {
        children
      }
    </userContext.Provider>
  )
}


export default function Profile (){
    const user = useContext(UserContext);
    
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}


export default function App() {
    return (
        <UserContext>
            <Profile />
        </UserContext>
    )
}