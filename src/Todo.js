import React, { useEffect, useState } from "react";
import { Input, Button } from "./utils";
import axios from "axios";
import TodoListing from "./TodoListing";

const intialState = {
  name: null,
  status: "Pending",
};
const Todo = () => {
  const [formData, setFormData] = useState(intialState);
  const [todoData, setTodoData] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, name: value }));
  };

  const handleSubmit = () => {
    try {
      axios
        .post(`http://localhost:4000/name`, formData)
        .then((res) => {
          console.log(res);
          getTodoData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getTodoData = () => {
    axios
      .get("http://localhost:4000/name")
      .then((res) => {
        setTodoData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <>
      {console.log(formData)}
      <div className="d-flex mt-5">
        <Input
          className="form-control w-25"
          onChange={handleChange}
          placeholder="Enter Todo"
        />
        <Button
          onClick={handleSubmit}
          text="Add Todo"
          className="btn btn-md btn-primary"
        />
      </div>
      <TodoListing data = {todoData}/>
    </>
  );
};

export default Todo;
