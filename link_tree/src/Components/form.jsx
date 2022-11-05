
import React from 'react'

function Form () {
  return (
    <React.Fragment>
      <form action='' method='post' id='form'>
        <h3>Contact Me</h3>
        <p>
          Hi there, Contact Me Hi there, contact me to ask me about anything you
          have in mind.
        </p>
        <div className='identification'>
          <section className='firstName'>
            <label htmlFor='firstName'>First name</label>
            <br />
            <input
              type='text'
              placeholder='Enter your first name'
              id='first_name'
            />
          </section>

          <section className='lastName'>
            <label htmlFor='lastName'>Last name</label>
            <br />
            <input
              type='text'
              placeholder='Enter your last name'
              id='last_name'
            />
          </section>
        </div>

        <div className='Email'>
          <label htmlFor='email'>Email</label>
          <br />
          <input type='text' placeholder='yourname@email.com' id='email' />
          <br />
        </div>

        <div className='texArea'>
          <label htmlFor='TextArea'>Message</label>
          <br />
          <textarea
            name='textArea'
            id='message'
            placeholder='Send me a message and i will reply you as soon as possible...'
          ></textarea>
        </div>

        <div className='checkBoxs'>
          <input type='checkbox' name='checkbox' id='CheckBox' />
          <label htmlFor='checkBox'>
            You are providing your data to Austyno who may contact you.
          </label>
        </div>

        <button type='submit' id='btn_submit'>
          Send message
        </button>
      </form>
    </React.Fragment>
  );
}

export default Form 

