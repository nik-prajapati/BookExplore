import { useState,useEffect } from "react";
import "./BookCard.css";


const BookCard = ({list,handleAddToDB}) => {

const handleBook=async (props)=>{
try{
    const resp=await fetch(`https://www.dbooks.org/api/book/${props.id}`)
    const d=await resp.json(resp);
    
    console.log(d)
    props={...props,descp:d.description,year:d.year}
}

catch(error){
props={...props,year:2000}
console.log(error);
}

console.log(props)
handleAddToDB(props);
}

    return <div>
        <div className="container">
            {
                list && list.map((currEle,idx) => {
                    
                    return (
                        
                        <div className="card mx-4 my-4" key={idx}>
                            <img className="card-img-top" src={currEle.image} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">{currEle.title}</h3>
                                <h5 className="card-title">{currEle.author}</h5>
                                <p className="card-text">{currEle.subtitle}</p>
                            </div>

                            <div className="card-body">
                                
                                <button className="btn btn-success mx-2" onClick={()=>handleBook({
                                    id: currEle.id,
                                    title: currEle.title,
                                    year: currEle.id,
                                    descp: currEle.subtitle,
                                  })}>Add To DataBase</button>

                            </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
}

export default BookCard;