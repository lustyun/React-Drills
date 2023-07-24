import React from "react";
import { useState } from "react";

function Form() {

  const [form, setForm] = useState({
    name: '',
    age: 0,
  })
 

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.value

      // name : 'bob'
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={form.name} 
          onChange={handleChange}
          name="name" 
          placeholder="enter name"
        />
        <input 
          type="text"
          value={form.age} 
          onChange={handleChange}
          name="age" 
          placeholder="enter age" 
        />
        <input 
        type="submit" 
        value='Submit Form'
        />
      </form>
    </div>
  );
}

export default Form;