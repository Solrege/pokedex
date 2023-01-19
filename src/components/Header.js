import { Link } from "react-router-dom"

const NavBar = () => {

  const URL = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
  
    return (
    <nav>
        <div>
            <Link to=''>
              <img src={URL} alt="Logo Pokemon"/>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar