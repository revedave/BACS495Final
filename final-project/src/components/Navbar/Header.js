import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './HeaderElements.js'

const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
          <NavMenu>
            <NavLink style={{color: "#fff",}} to='/index' activeStyle>
              Home
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink style={{color: "#fff",}} to= '/index'>Sign In</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Header;