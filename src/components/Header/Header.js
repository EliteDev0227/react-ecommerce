import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, openMenu } from '../../actions';
import { useWindowSize } from '../../hooks';
import SideMenu from '../SideMenu/SideMenu';

import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.svg';
import userIcon from '../../assets/user.svg';
import zoomIcon from '../../assets/zoom.svg';
import cartIcon from '../../assets/cart.svg';

const HeaderWrapper = styled.div`
  background-color: #11504f;
  height: 138px;
  display: flex;
  ${({ isMobile }) => isMobile && `
    height: 64px;
  `}

`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`;

const Logo = styled.img`
  width: 93px;
  height: 77px;
  margin: auto;
  margin-left: 20px;
  ${({ isMobile }) => isMobile && `
  width: 56px;
  height: 46px;
  margin: auto;
  `}
`;

const HeaderIconWrapper = styled.div`
  height: 40px;
  width: 440px;
  flex-shrink: 0;
  margin: auto;
  padding-right: 40px;
  ${({ isMobile }) => isMobile && `
    flex-shrink: 1;
    padding-right: 10px;
  `}
  display: flex;
  flex-direction: row-reverse;
  float: right;
`;

const SearchBoxWrapper = styled.div`
  width: 325px;
  height: 40px;
  margin: auto;
  background-color: white;
  display: flex;
  ${({ isMobile }) => isMobile && `
    padding: 5px;
  `}
`;

const SearchBoxInput = styled.input`
  flex-grow: 4;
  border: 1px solid black;
`;

const SearchBoxButton = styled.div`
  flex-grow: 1;
  background-color: black;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  text-align: center;
  padding: 10px;
`;

const HeaderIcon = styled.img`
  size: 20px;
  margin: 10px;
`;

const navItems = [
  { name: 'Mens', route: '/' },
  { name: 'Womens', route: '/' },
  { name: 'Accessories', route: '/' },
  { name: 'Sale!', route: '/' },
];

const icons = [userIcon, cartIcon];

const Header = () => {
  const [searching, setSearching] = React.useState(false);

  const size = useWindowSize();

  const isMobile = size.width < 1024;

  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.menuOpen);

  return (
    <div>
      <HeaderWrapper isMobile={isMobile}>
        {isMobile ? (
          <>
            <HeaderIcon src={menuIcon} onClick={() => dispatch(openMenu())} />
          </>
        ) : null}
        <Logo isMobile={isMobile} src={logo} />
        <MenuWrapper>
          {isMobile ? null : (
            <>
              {navItems.map(item => (
                <MenuItem
                  className="navbar-brand"
                  to={item.route}
                  onClick={() => dispatch(isMenuOpen ? closeMenu() : openMenu())}
                >
                  {item.name}
                </MenuItem>
              ))}
            </>
          )}
        </MenuWrapper>
        <HeaderIconWrapper isMobile={isMobile}>
          {icons.map(item => (
            <img className="icon" src={item} />
          ))}
          {
            isMobile ? <HeaderIcon src={zoomIcon} onClick={() => setSearching(!searching)} /> : (
              searching ? (
                <SearchBoxWrapper isMobile={isMobile}>
                  <SearchBoxInput />
                  <SearchBoxButton onClick={() => setSearching(!searching)}>GO</SearchBoxButton>
                </SearchBoxWrapper>
              ) : <HeaderIcon src={zoomIcon} onClick={() => setSearching(!searching)} />
            )
          }
        </HeaderIconWrapper>
      </HeaderWrapper>
      {
        searching && isMobile ? (
          <SearchBoxWrapper isMobile={isMobile}>
            <SearchBoxInput />
            <SearchBoxButton onClick={() => setSearching(!searching)}>GO</SearchBoxButton>
          </SearchBoxWrapper>
        )
          : ''
      }
      {
        isMenuOpen ? (
          <SideMenu />
        )
          : ''
      }
    </div>
  );
};

export default Header;
