
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search/Search";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://localhost/api/user.php")
      .then((response) => response.json())
      .then((d) => setData(d));
console.log(data)
  }, []);


  const handleAddToDB = (props) => {
    const formData = { ...props };
    SubmitToDatabase(formData);
  };

  const SubmitToDatabase = async (formData) => {
    // console.log("I  am caalled");
    const resp = await axios.post("http://localhost/api/user.php", formData);
    if (resp.data.Success) {
      setMessage(resp.data.Success)
    }
    else {
      setMessage(resp.data.Message)

    }

    setTimeout(() => {
      setMessage(null);

    }, 5000);


  };

  return (
    <div className="App">
    
      {message ? (
        <div className="p-1 mb-1 bg-success text-white notification">{message}</div>
      ) : (
        <div></div>
      )}

      <div className="input-box">
        <FormInput SubmitToDatabase={SubmitToDatabase} />
        <Search handleAddToDB={handleAddToDB} />
      </div>
    </div>
  );
}

export default App;
