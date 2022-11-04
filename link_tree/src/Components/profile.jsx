import React, { Component } from 'react';

class Profile extends Component {
  render() { 
    return(
      <div className='profile'>
        <img src="/img/profile__img.png" alt="profile_image" id='profile_img' />
        <h3 id='twitter'>Austynomilan</h3>
        <p id='slack'>Austyno</p>
      </div>
      
    )
  }
}
 
export default Profile;
