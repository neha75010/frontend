import React, { useContext, useEffect, useState }from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'



const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const NavLogo = styled.div`
  img {
    height: 50px;
  }

  p {
    font-size: 24px;
    color: black;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 0 20px;
  }

  a {
    color: black;
    text-decoration: none;
    position: relative;

    &.active::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: red;
    }
  }
`;

const NavLoginCart = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    color: black;
    margin-right: 8px;
  }
`;

const CartCount = styled.div`
  background-color: red;
  border-radius: 50%;
  color: white;
  padding: 4px;
  width: 20px;
  height: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);
`;
const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const totalItems = getTotalCartItems(); 
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));


  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    checkAuthStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

   
    const menuItems = [
        { name: "shop", path: "/" },
        { name: "mens", path: "/mens" },
        { name: "womens", path: "/womens" },
        { name: "kids", path: "/kids" },
    ];
    return (
      <NavbarContainer>
        <NavLogo>
          <img src={logo} alt='Logo' />
          <p>Sofi Mehndi</p>
        </NavLogo>
        <NavMenu>
          {menuItems.map(item => (
            <li key={item.name}>
              <Link to={item.path} className={window.location.pathname === item.path ? 'active' : ''}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </NavMenu>
        <NavLoginCart>
          <button onClick={isAuthenticated ? handleLogout : () => navigate('/login')}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
          <Link to='/cart'>
          <img src={cart_icon} alt='Cart' />
          <CartCount>{totalItems}</CartCount>
        </Link>
        </NavLoginCart>
      </NavbarContainer>
    );
  };
  
  export default Navbar;