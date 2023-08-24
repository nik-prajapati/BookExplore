import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "./BookCard.css";

function Search({ handleAddToDB }) {
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);
  const [message, setMessage] = useState(null);
  const [data,setData]=useState([]);

  const handBtn = async () => {

    let response = await fetch(`https://www.dbooks.org/api/search/${inp}`);
    let d = await response.json();
    
    //getting further details
    

    //For Message
    if(d.status==="not found")
      setMessage(d.status);    
    setTimeout(()=>{
      setMessage(null);
    },3000)

    //Added to data recieved
    
    // d.books.map(async (currEle)=>{
    //   let response = await fetch(`https://www.dbooks.org/api/book/${currEle.id}`);
    //   if(response.status=='404')
    //     return;
    //   let db = await response.json();

    //   console.log(db);
    // })

    setList(d.books);

    setInp("");
    
  };

  return (

    <div>
    

      <div className="box">
        <input type="text" value={inp} onChange={(event) => setInp(event.target.value)} placeholder="Enter the book type" onKeyPress={(e) => {if (e.key === "Enter") {handBtn()}}}
        />

        <button onClick={() => { handBtn();}} className="btn btn-primary my-4">submit </button>

      
      </div>
      <BookCard list={list} handleAddToDB={handleAddToDB}/>

      {message? (
        <div className="p-1 mb-1 bg-success text-white notification">{message}</div>
      ) : (
        <div></div>
      )}
      </div> 
      
  )     
}

export default Search;
