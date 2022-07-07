import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'




class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <h1>Welcome to Apartment app</h1>

        <Nav className='nav-link'>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className='nav-link'>Sign Out</a>

            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className='nav-link'>Sign In</a>

            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className='nav-link'>Sign Up</a>

            </NavItem>
          }
          <NavItem>
            <NavLink to="/apartmentindex" className='nav-link'> Apartments</NavLink>

            <NavLink to="/apartmentnew" className='nav-link'> List an Apartment</NavLink>

            <NavLink to="/" className='nav-link'> Home</NavLink>
          </NavItem>

        </Nav>



      </>
    )
  }
}
export default Header