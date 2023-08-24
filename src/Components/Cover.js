import React from 'react'
import './Cover.css'
const Cover = ({item}) => {
  return (
    <div>
      
            <div className="box" key={item.id}>
            <div className="image">
            <img src={item.image} alt="" />
            </div>
            <div className="details">
            <h3> {item.title}</h3>
            <h4> {item.subtitle}</h4>
            <h4> By {item.authors}</h4>
            </div> 
            </div>     
    
    </div>
  )
}

export default Cover
