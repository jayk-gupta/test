import React,{useState} from 'react';
import './Form.css'
const Form = () => {
  return (
    <form>
      <h3 className='course-goal'>Course Goal</h3>
      <label>
        <input className='input' type="text"></input>
      </label>
      <button className='goal-btn'>Add Goal</button>
  </form>
)

}

export default Form;
