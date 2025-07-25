import { LuSearch } from "react-icons/lu";
import { FaUserSecret } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import "../styles/components-css/header.css"

const Header = () => {
    return ( 
        <div className="header">
            <div className="logo">
                <img src="public/logo.png" alt="" />
                <h1>Furniro</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="searches">
                <i className="search"><FaUserSecret /></i>
                <i className="search"><LuSearch /></i>
                <i className="search"><AiOutlineHeart /></i>
                <i className="search"><IoMdCart /></i>
            </div>
        </div>
    );
}

export default Header;