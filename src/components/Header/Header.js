import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.svg';
import userIcon from '../../assets/user.svg';
import zoomIcon from '../../assets/zoom.svg';
import cartIcon from '../../assets/cart.svg';

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`;

const HeaderWrapper = styled.div`
  background-color: #11504f;
  height: 64px;
  display: flex;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 20px;
  margin-top: 9px;
  max-height: 46px;
  width: auto;
  height: auto;
`;

const MenuIconWrapper = styled.div`
width:100%;
padding-right: 20px;
`;
const MenuIcon = styled.img`
  size: 20px;
  float: right;
  margin-left: 20px;
  margin-right: 0px;
`;

const navItems = [
  { name: 'Mens', route: '/' },
  { name: 'Womens', route: '/' },
  { name: 'Accessories', route: '/' },
  { name: 'Sale!', route: '/' },
];

const icons = [cartIcon, userIcon, zoomIcon];

const Header = () => {
  const size = useWindowSize();

  return (
    <HeaderWrapper>
      <MenuIcon src={menuIcon} />
      <Logo src={logo} />
      <MenuWrapper>
        {size.width > 1024 ? (
          <>
            {navItems.map(item => (
              <MenuItem className="navbar-brand" to={item.route}>
                {item.name}
              </MenuItem>
            ))}
          </>
        ) : null}
        <MenuIconWrapper>
          {icons.map(item => (
            <MenuIcon src={item} />
          ))}
        </MenuIconWrapper>

      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
