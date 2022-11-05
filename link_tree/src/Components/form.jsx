import { useState, useEffect } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //function for handling change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e)
    setFormValues({ ...formValues, [name]: value });
  };

//handling submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  //form validation
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues)
  }
}, [formErrors])

  const validate = (values) => {

    const errors = {};
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

    if (!values.first_name) {
      errors.first_name = 'oops!, first name required'
    }
       if (!values.last_name) {
         errors.last_name = "oops!, last name required";
    }
       if (!values.email) {
         errors.email = "oops!, email required";
       } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
    }
       if (!values.message) {
         errors.message = "oops!, message required";
    }
       if (!values.checkBox) {
         errors.checkBox = "oops!, you cant proceed without checking me!";
    }
    
    return errors;
  }

  return (
    <React.Fragment>
      <form action='' onSubmit={handleSubmit} method='post' id='form'>
        <h3>Contact Me</h3>
        <p className="description">
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
            <p>{formErrors.first_name}</p>
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
            <p>{formErrors.last_name}</p>
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
          <p>{formErrors.email}</p>
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
          <p>{formErrors.message}</p>
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
          <br />
          <p>{formErrors.checkBox}</p>
        </div>

        <button type='submit' id='btn_submit'>
          Send message
        </button>
      </form>
    </React.Fragment>
  );
}

export default Form;
