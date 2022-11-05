import { useState } from "react";
import React from "react";

function Form() {
  // initializing state
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    checkBox: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  //function for handling change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };



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
              name='first_name'
              placeholder='Enter your first name'
              id='first_name'
              value={formValues.first_name}
              onChange={handleChange}
            />
          </section>

          <section className='lastName'>
            <label htmlFor='lastName'>Last name</label>
            <br />
            <input
              type='text'
              name='last_name'
              placeholder='Enter your last name'
              id='last_name'
              value={formValues.last_name}
              onChange={handleChange}
            />
          </section>
        </div>

        <div className='Email'>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='text'
            name='email'
            placeholder='yourname@email.com'
            id='email'
            value={formValues.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className='texArea'>
          <label htmlFor='TextArea'>Message</label>
          <br />
          <textarea
            name='message'
            id='message'
            placeholder='Send me a message and i will reply you as soon as possible...'
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='checkBoxs'>
          <input
            type='checkbox'
            name='checkbox'
            id='CheckBox'
            value={formValues.checkBox}
            onChange={handleChange}
          />
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

export default Form;
