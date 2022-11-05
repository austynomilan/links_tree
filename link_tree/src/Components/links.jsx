import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Linker extends Component {
    render() { 
        return (
          <section className='linkers'>
            <a
              href='https://training.zuri.team/'
              id='btn_zuri'
              target='_blank'
              rel='noreferrer'
            >
              Zuri Team
            </a>

            <a
              href='http://books.zuri.team'
              id='books'
              title='Handpicked books and customized guides to help you grow and advance your tech careers.'
              target='_blank'
              rel='noreferrer'
            >
              Zuri Books
            </a>

            <a
              href='https://books.zuri.team/python-for-beginners?ref_id=<Austyno>'
              id='book_python'
              title='The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.'
              target='_blank'
              rel='noreferrer'
            >
              Python Books
            </a>

            <a
              href='https://background.zuri.team'
              id='pitch'
              title='With the right digital skill set and access to the global freelance marketplace, you can now offer your services online and get paid in dollars from home. Ready?'
              target='_blank'
              rel='noreferrer'
            >
              Background Check For Codes
            </a>

            <a
              href='https://books.zuri.team/design-rules'
              id='book_design'
              title='The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.'
              target='_blank'
              rel='noreferrer'
            >
              Design Books
            </a>

            <Link to= '/contact'
              href='https://books.zuri.team/design-rules'
              id='contact'
              title='this will redirect users to the contact page'
            >
              Contact Me
            </Link>
          </section>
        );
    }
}
 
export default Linker;