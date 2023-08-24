import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const AllBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData=()=>{
    fetch("http://localhost/api/user.php")
    .then((response) => response.json())
    .then((d) => setData(d));
  }

  const handleDelete = async (id) => {
    
    const resp=await axios.delete(`http://localhost/api/user.php/`+id)
    fetchData();
    console.log(resp.data.Success);
  };

 
  return (
    <div>

      <ul className="list-group  ">
        
              <table className="table table-bordered ">
                <thead className="thead-light ">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Title</th>
                    <th scope="col">year</th>
                    <th scope="col" className="w-50">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                data && data.map((item,idx)=>{
                    return (
                        <tr key={idx}>
                        <th scope="row">{idx+1}</th>
                        <td>{item.title}</td>
                        <td>{item.year}</td>
                        <td>{item.description}</td>
                        <td className="d-flex">

                        <Link to={"/bookdetail/"+item.id} className="btn btn-primary mx-2"> view</Link>
                        <Link to={"/edit/"+item.id} className="btn btn-primary mx-2"> Edit</Link>
                        
                        <button className="btn btn-primary mx-2" onClick={()=>handleDelete(item.id)}> Delete</button>
                        </td>
                        
                      </tr>
                    )
                })
                }

                </tbody>
              </table>

      </ul>
    </div>
  );
};

export default AllBooks;
