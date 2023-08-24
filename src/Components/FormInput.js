import React from "react";
import { useState } from "react";
import "../App.css";

const FormInput = ({ SubmitToDatabase }) => {
  const [sform, setForm] = useState({ id: "", title: "", year: "", descp: "" });

  const handleBtn = (e) => {
    setForm({ ...sform, [e.target.name]: e.target.value });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    const formData = { ...sform };
    SubmitToDatabase(formData);
    setForm({ id: "", title: "", year: "", descp: "" });
  };

  return (
    <div>
      <form className="w-100" onSubmit={(e) => handleSubmmit(e)}>
        <div className="form-group mx-4">
          <label>ID</label>
          <input
            type="number"
            className="form-control "
            value={sform.id}
            name="id"
            onChange={(e) => handleBtn(e)}
          />
        </div>

        <div className="form-group mx-4">
          <label>Title</label>
          <input
            type="text"
            className="form-control "
            value={sform.title}
            name="title"
            onChange={(e) => handleBtn(e)}
          />
        </div>

        <div className="form-group mx-4">
          <label>Year</label>
          <input
            type="numeric"
            className="form-control"
            value={sform.year}
            name="year"
            onChange={(e) => handleBtn(e)}
          />
        </div>

        <div className="form-group mx-4">
          <label>Descp</label>
          <input
            type="text"
            className="form-control"
            value={sform.descp}
            name="descp"
            onChange={(e) => handleBtn(e)}
          />
        </div>

        <button name="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInput;
