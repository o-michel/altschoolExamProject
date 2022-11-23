import React from 'react'
import Image  from "../images/mich2.jpg";

const Homes = () => {
  return (
    <div>
        <div className='profile-container'>
            <div className='profile-word'>
                <h2>Hi!, am Micheal Owojori</h2>
                <h2>A front-End Engineer</h2>
                <p>4 followers · 7 following</p>
            </div>
            <div className='profile-picture'>
                <img src={Image} alt="Profile " />
            </div>
        </div>
        <div className='repo'>
            Repositories
        </div>
    </div>
  )
}

export default Homes