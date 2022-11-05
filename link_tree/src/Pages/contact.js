import React from 'react'
import Footer from "../Components/footer";
import Form from '../Components/form';
import "../form.css";





const Contact = () => {
  return (
    <React.Fragment>
      <div className='contactContainer'>
        <Form />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
