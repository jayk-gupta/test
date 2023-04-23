import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import GoalItem from './Components/GoalItem'

function App() {
  const goals = [{
    title: 'Learn React'
  }, {
   title:'Learn DSA'
 }]
  return (
    <div>
    <Form/>
      <GoalItem title={ goals[0].title} />
      <GoalItem title={ goals[1].title} />
    </div>
  )
}

export default App
