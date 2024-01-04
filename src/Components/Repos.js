import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos=({repos_url})=>{
//in the repos api link, we are getting the response in an array of objects, so we use empty array as initial state
    const [repos, setRepos]=useState([])

    const fetchRepos=async()=>{
      //response.data is equivalent to {data}
         const {data}= await Axios.get(repos_url)
         //we store the data in the setRepos below
        setRepos(data)
    }
    //in order to fire the fetch request on loading we use useeffect method
    useEffect(()=>{
    fetchRepos()
    },[repos_url])

  return(
    <ListGroup>
        {repos.map(repo=>(

            <ListGroupItem key={repo.id}>
               <div className="text-primary">{repo.name}</div>
               <div className="text-secondary">{repo.description}</div>
               <div className="text-primary">{repo.language}</div>
            </ListGroupItem>
        ))}
    </ListGroup>
  )



}

export default Repos
