import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import { useState } from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from './component/FeedbackStats'
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./component/FeedbackForm";
import AboutComponentIcon from './component/AboutComponentIcon';
import AboutPages from "./component/pages/AboutPage"

function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  function deleteItem(id){
    console.log(id)
    setFeedback((prev)=>{
      return prev.filter((item)=>{
        return item.id!==id
      })
    })
    
  }

  function addFeedback(newFeedback){
    newFeedback.id=uuidv4()
    console.log(newFeedback)
    setFeedback(()=>{
      return [newFeedback,...feedback]
    })
    //feedback.push(newFeedback) is false because state are immutable
  }

  return (
    <Router>
      <Header text="Feeback UI" />
      <Routes>
        <Route exact path ='/' element={
          <>
            <div className="container">
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleClick={deleteItem}/>
            </div>
            <AboutComponentIcon/>
          </>
        }></Route>
        <Route path='/about' element={
          <div className='container'>
            <AboutPages/>
          </div>
        }></Route>
      </Routes>
    </Router>
  )
}


// function App(){
//   return React.createElement('div',{className: 'container'},React.createElement('h1',{},'My App'));
// }

export default App;