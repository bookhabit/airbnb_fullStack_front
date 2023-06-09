import {Link, Navigate, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";

export default function ReigsterPage() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function registerUser(event){ 
    event.preventDefault();
    try{
      const response = await axios.post('/register',{
        name:name,
        email:email,
        password:password
      })
      alert('register successful.')
      setRedirect(true)
    }catch(e){
      alert('register failed')
    }
  }

  if(redirect){
    const router = useNavigate();
    router('/')
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input 
                type="text" 
                placeholder="이 현진"
                value={name}
                onChange={ev=>setName(ev.target.value)}
                />
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            if you have an account? 
            <Link className="underline text-black ml-4" to={'/login'}>
                Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}