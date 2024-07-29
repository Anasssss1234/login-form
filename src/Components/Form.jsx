import React, { useState } from 'react'

function Form() {
    const[isLogin, setisLogin]=useState(true)
  return (
    <>
    <div className='container'>
        <div className="form-container">
          <div className='form-toggle'>
            <button className={isLogin? 'active': ''} onClick={()=> setisLogin(true)}>Login</button>
            <button className={!isLogin? 'active': ''} onClick={()=> setisLogin(false)}>Signup</button>
          </div>
          {isLogin?<>
          <div className='form'>
            <h2>Login</h2>
            <input type='email' placeholder='Email'/>
            <input type="password" placeholder='Paswword' />
            <a href='#'>forgot Password?</a>
            <button>Login</button>
            <p>Not a member ?  <a href='#'  onClick={()=> setisLogin(false)}>Signup now</a></p>
          </div>
          </>:<>
          <div className='form'>
          <input type='email' placeholder='Email'/>
          <input type="password" placeholder='Paswword' />
          <input type="password" placeholder='Conform-Paswword' />
          <button>Signup</button>
          </div>
          </>}
        </div>
    </div>
    </>
  )
}

export default Form
