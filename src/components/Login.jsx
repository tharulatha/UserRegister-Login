import React from 'react'

function Login() {
  return (
      <div className='container'>
          <form>
              <h2 className='form-head'>Login</h2>
              <div className='form-group'>
                  <input  type='email' name='email' className='form-control' placeholder='Email Address *'/>
              </div>
              <div className='form-group'>
                  <input  type='password' name='password' className='form-control' placeholder='Password *'/>
              </div>
              <div className='btn-grup'>
                  <button className='btn'>LOGIN</button>
              </div>
          </form> 
    </div>
  )
}

export default Login