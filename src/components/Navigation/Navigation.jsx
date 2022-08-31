import { Link, useMatch,useResolvedPath} from "react-router-dom"
import React from 'react'
import "./Navigation.css"

const Navigation = () => {
  
  
  return (
    <div className='nav'>
      <Link to="/" className='logo'>HUMZ</Link>
      <ul className='nav-list'>
        
        <CustomLink to="/Intro">Intro</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Product">Projects</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
       
      </ul>
    </div>
  )
}
function CustomLink ({to, children,...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className= {isActive === to ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
export default Navigation
