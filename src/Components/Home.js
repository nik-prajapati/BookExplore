import React, { useEffect, useState } from 'react'
import './Home.css'
import Cover from './Cover';

const Home = () => {
  const [data,setData]=useState([]);
  const [avail,setAvail]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const resp=await fetch('https://www.dbooks.org/api/recent')
      const d=await resp.json();

      setData(d.books);
      
      console.log(avail)

    }
    fetchData();
  },[])
  
  console.log(avail)
  return (
    <div>
    <div className="container">
    
    <div className="header">
    <h2 class="alert alert-primary" >Top Books Of this Month</h2>
    </div>
    <div className="top-books">
    { data && data.map((ele,idx)=>{
      return <Cover item={ele} key={idx}/>
    })
    }
    </div> 
    </div>

    </div>
    
    
  )
}

export default Home
