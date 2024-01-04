import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/Usercard";
import Repos from "../Components/Repos";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home=()=>{

    const context=useContext(UserContext)
    //the below query is the input user types in(name/email etc)
    const [query, setQuery]= useState("")
    const[usero, setUsero]= useState(null)

    const fetchDetails=async()=>{
        //there might be chances that user might not be there as every user name will not be captured so we put try and catch
        
        try{
              const {data}= await Axios.get(`https://api.github.com/users/${query}`)
              //storing the respnse.data / {data} in the below setUser
              setUsero(data)
              console.log({data})
        
        }

        catch(error){
            toast("Not able to locate user", {type:"error"})
        }
    }

    //Putting all /any page behind login

    if(!context.user?.uid){
        return <Link to="/Signin"/>
    }

    return(
        <Container>
               <Row className="mt-3">
                  <Col md="7">
                    <InputGroup>
                         <Input type="text"
                         value={query}
                         onChange={e=>setQuery(e.target.value)}
                         placeholder="Please provide a username"/>
                          <div>
                           <Button onClick={fetchDetails} color="primary" className="ml-3">Fetch User</Button>
                          </div>
                    </InputGroup>
                    {usero ? <UserCard user={usero}/> : null}
                  </Col>
                  <Col md="7">{usero ? <Repos repos_url={usero.repos_url}/> : null}</Col>
               </Row>
        </Container>
    )

}

export default Home