import React from 'react'
import Footer from "../Components/footer";
import Form from '../Components/form';




const Contact = () => {
  return (
    <React.Fragment>
      <div className='contactContainer'>
        <h3>Contact Me</h3>
        <p>
          Hi there, Contact Me Hi there, contact me to ask me about anything you
          have in mind.
        </p>
        <Form />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
