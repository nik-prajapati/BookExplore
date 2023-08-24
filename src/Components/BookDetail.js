import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";

const BookDetail = () => {
  const { id } = useParams();
  const [Data, setData] = useState({});
  const [load, setload] = useState(true);
  useEffect(() => {
    
    const fetchData = async () => {
      
      try {
        setload(false);
        const resp = await fetch(`https://www.dbooks.org/api/book/${id}`);
        const d = await resp.json(resp);
        setData(d);
        setload(true);
      } catch (error) {
        console.log(error);
      }
      
    };

    fetchData();
    
  }, []);

  console.log(Data);
  return (
    <div>
    {
      load ? <div className="d-flex contain">
        <div className="image-section d-flex">
          <img src={Data.image} className="img-fluid" alt="Responsive image" />
        </div>
        <div className="Details w-75">
          <h1 className="alert alert-info">
            {Data.title}
            <h3 className="text-muted mx-2"> {Data.subtitle}</h3>
          </h1>
          <h2>
            <span className="text-muted font-1">Author : </span>
            {Data.authors}
          </h2>

          <h2>
            <span className="text-muted font-1">Description : </span>
            {Data.description}
          </h2>
          <h2>
            <span className="text-muted font-1">Pages : </span>
            {Data.pages}
          </h2>
          <h2>
            <span className="text-muted font-1">Published by : </span>
            {Data.publisher}
          </h2>
          <h2>
            <span className="text-muted font-1">Year of Publication : </span>
            {Data.year}
          </h2>
        </div>
      </div> : <div className="loader-container"><div className="loader">loading...</div></div>
    }
      
    </div>
  );
};

export default BookDetail;
