
import React from 'react'

function Form () {
  return (
    <React.Fragment>
      <form action='' method='post' id='form'>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          placeholder='Enter your first name'
          id='first_name'
              />
              
        <label htmlFor='lastName'>Last name</label>
              <input type='text' placeholder='Enter your last name' id='last_name' />
              
        <label htmlFor='lastName'>Email</label>
              <input type='text' placeholder='yourname@email.com' id='email' />
              
        <label htmlFor='TextArea'>Message</label>
        <textarea
          name='textArea'
          id='message'
          placeholder='Send me a message and i will reply you as soon as possible...'
              ></textarea>
              
              <input type='checkbox' name='checkbox' id='CheckBox' />
        <label htmlFor='checkBox'>
          you are providing your data to Austyno who may contact you.
              </label>
              
        <button type='submit' id='btn_submit'>
          Send message
        </button>
      </form>
    </React.Fragment>
  );
}

export default Form 

