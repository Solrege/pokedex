import React from 'react'

const NavBar = () => {
    const URL = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
  
    return (
    <nav>
        <div>
            <img src={URL} alt="Logo Pokemon"/>
        </div>
        <div className='heart'>
          ❤
        </div>
    </nav>
  )
}

export default NavBar