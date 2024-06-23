import { useState } from 'react';
import './App.css'

function App() {
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')
  const [ details, Setdetails] = useState([])
 const handleSubmit = (e) => {
  e.preventDefault();
  if (!email || !password){
    alert('All feilds are manadatory');
     return;
  }
  const updatedValue = {email:email, password:password};
  Setemail('')
  Setpassword('')
  Setdetails([...details, updatedValue]);

 }

  return (
    <>
    <form onSubmit={handleSubmit}>
   <div className='background'>
        <div className='container'>
          <div className='head'>
            <h2>Login</h2>
          </div>
          <div className='input'>
            <label>Email</label>
            <input type='email' placeholder='Enter your Email...' value={email} onChange={(e)=> Setemail(e.target.value)}/>
          </div>
          <div className='input'>
            <label>Password</label>
            <input type='password' placeholder='Enter your Email...' value={password} onChange={(e)=> Setpassword(e.target.value)}/>
          </div>
          <div className='btn'><button>Sign in</button></div>
        </div>
        {details!=[] && details.map((Ele)=>{
          return (
            <>
            <div className='list'>
              <p>{Ele.email}</p>
              <p>{Ele.password}</p>
            </div>
            </>
          )
        })}
      </div>
      </form>

    </>
  )
}

export default App





