import React from 'react'
import { Link } from 'react-router-dom'


const Regions = () => {
    return (
        <div className="region">
           <Link to="/east">
               <h2>East</h2>
           </Link>
           <Link to="/central">
               <h2>Central</h2>
           </Link>
           <Link to="/west">
               <h2>West</h2>
           </Link>
        </div>
    )
}

export default Regions;