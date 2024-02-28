import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import {Link} from 'react-router-dom'
import Favourite from "./Favourite";


const Nav = ({ handleInputChange, query , handleClear , clearref }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
          ref={clearref}
        />
        <span id="cancel" onClick={handleClear} >🗙</span>
      </div>
      <div className="profile-container">
        <a href="">
        <FiHeart className="nav-icons"  />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      
    </nav>
  );
};

export default Nav;