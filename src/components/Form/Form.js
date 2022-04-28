import React from 'react'
import './Form.scss';
const Form = () => {
  return (
    <div className='form-content'>
      <form className='form'>
        <label>Your Name</label>
        <input type='text' placeholder='Your Name'/>
        <label>Email</label>
        <input type='email' placeholder='Email'/>
        <label>Subject</label>
        <input type='text'/>
        <label>Details</label>
        <textarea rows='6' placeholder='Type a short message here'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form