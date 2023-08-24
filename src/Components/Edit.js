import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Edit = () => {

    const [data,setData]=useState(null);
    const [message,setMessage]=useState("");
    const {id}=useParams();
    useEffect(()=>{
    
        const fetchData=async ()=>{
            const resp=await fetch(`http://localhost/api/user.php/${id}`);
            const respData=await resp.json();
            setData(respData[0]);
        }
        fetchData();
        },[])
        
    const handleBtn = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    const handleSubmmit = async (e) => {
        e.preventDefault();
        const formData = {id:data.id,title:data.title,year:data.year,description:data.description};
        const resp = await axios.put("http://localhost/api/user.php", formData);
        if(resp.data.Success){
            setMessage(resp.data.Success)
          } 
          else{
            setMessage(resp.data.Message)
          }
          setData({id:"",title:"",year:"",description:""})
          
      };


  return (
    <div>
    {message? (
        <div className="p-1 mb-1 bg-success text-white notification">{message}</div>
      ) : (
        <div></div>
      )}


    {
        data ? <form className="w-100" onSubmit={(e) => handleSubmmit(e)}>
    <div className="form-group mx-4">
      <label>ID</label>
      <input type="number" className="form-control " value={data.id} name="id" onChange={(e) => handleBtn(e)}/>
    </div>

    <div className="form-group mx-4">
      <label>Title</label>
      <input
        type="text"
        className="form-control "
        value={data.title}
        name="title"
        onChange={(e) => handleBtn(e)}
      />
    </div>

    <div className="form-group mx-4">
      <label>Year</label>
      <input type="numeric" className="form-control" value={data.year} name="year" onChange={(e) => handleBtn(e)}
      />
    </div>

    <div className="form-group mx-4">
      <label>Description</label>
      <input
        type="text"
        className="form-control"
        value={data.description}
        name="description"
        onChange={(e) => handleBtn(e)}
      />
    </div>

    <button name="submit" className="btn btn-primary">
      Update
    </button>
  </form>
:
<div class="alert alert-primary" role="alert">
  No Data Found!
</div>
}
    </div>
  
  )
}

export default Edit
