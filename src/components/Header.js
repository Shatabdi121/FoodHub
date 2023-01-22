import { useState } from "react";
import Logo from "../assets/img/foodhub.png"
import { Link } from "react-router-dom";

const Title= () => ( 
    <a href="/">
        <img  className="logo" alt="logo" src={Logo} />
    </a>
     );

//Components
const Header = () => {
    
    const [isLoggedIn, setIsLoggedIN] = useState(false);

    return (
    <div className="header">
        <Title/> 
        <div className="nav-items">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"> <li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>Cart</li>
            </ul>
        </div>
        {
            isLoggedIn ? (
                <button onClick={() => setIsLoggedIN(false)}>Logout</button>
            ):(
                <button onClick={() => setIsLoggedIN(true)}>Login</button> 
            )
        }
    </div>
    );
}


export default Header;
