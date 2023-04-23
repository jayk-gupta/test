import React,{useState} from 'react';
import './GoalItem.css';
// props is an object
const GoalItem = (props) => {
   const [title, setTitle] = useState(props.title);

   const clickHandler = () => {
     setTitle('Updated');
     console.log('updated');
   };
  return (
    <div className='goal-item'>
     <div>  {title}</div>
    <button onClick={clickHandler}>change title</button>
    </div>
  )
}

export default GoalItem;