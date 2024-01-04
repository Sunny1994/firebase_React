import React,{useState, useContext} from "react";
import {
Collapse,
Navbar,
NavbarBrand,
NavbarToggler,
Nav,
NavItem,
NavLink,
NavbarText
} from "reactstrap"

import {Link} from "react-router-dom"
import { UserContext } from "../context/UserContext";

const Header=()=>{

    const context= useContext(UserContext)

    const [isOpen, setIsOpen]= useState(false)

    const toggle=()=> setIsOpen(!isOpen)
    
    return(
        <Navbar color="info" light expand="md">

         <NavbarBrand><Link to="/" className="text-white">LCO GItfire App</Link></NavbarBrand>
         {/* here at Nav bar what happens is that this Navbar text appears only when there is a user logged in
         and when there is a user, we drill down to the user object's properties further by using "?" expression
         to access the user object's object which is the mail id and if there's none, it uses a ternary operator
         to show the empty string */}
         <NavbarText className="text-white">{
            context.user?.email ? context.user.email: ""
         }</NavbarText>

          <NavbarToggler onClick={toggle}/>
          {/* here we write the javascript code to show the logout option only when the user signs in or else don't show. 
          And also we put the empty tags <></> in the ternanry operator because since its javascript and it has to contain only 
          one parent element and we have two navlinks in the second opetion of the ternary operator due to which an error
          pops up and so we enclose those  navlinks within a single parent only*/}

          <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
              
          {
            context.user? (<NavItem>
                <NavLink onClick={()=>{context.setUser(null)}} className="text-white">
                     Log out
                </NavLink>
            </NavItem>
            ) : ( 
            <>
            <NavItem>
                
                   <NavLink tag={Link} to="./Signup" className="text-white">
                       Sign up
                     </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="./Signin" className="text-white">
                         Sign in
                    </NavLink>
                </NavItem>
                </>
                ) 
                
          }
    
             
               
                
    </Nav>
    </Collapse>
        </Navbar>
    )

}

export default Header
