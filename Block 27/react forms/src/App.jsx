import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenicate'
import SingUpForm from './components/SingUpForm'

export default function App() {

  const [token, setToken] = useState(null);


  return (
    <>
    <SingUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />

    </>
  );
}



