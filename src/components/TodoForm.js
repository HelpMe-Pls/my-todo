import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = e =>{
      setInput(e.target.value);
  }


  const handleSubmit = (e) => {
    props.onSubmit({
        id: Math.floor(Math.random()*6996)
        text: input
    })

    e.preventDefault();
  };
  return (
    <form className="Todo-Form" onSubmit={handleSubmit}>
      <input
        className="Todo-Input"
        type="text"
        placeholder="Type sth"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button className="Todo-Button">Add</button>
    </form>
  );
}

export default TodoForm;
