import { AiOutlineHome } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <div className='nav-left'>
            <FaTripadvisor size = {28} style = {{color: "#68912b"}}/>
            <h1>WellyGuide</h1>
            </div>

           <Link to = '/' style = {{textDecoration: "none"}}>
            <AiOutlineHome size = {28} style = {{color: "black"}}/>
           </Link>
        </nav>
    )
}
 
export default Header;