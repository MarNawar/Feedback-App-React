import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}){
  const [text, setText] = useState('');
  const [Rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [messege,setMessage] = useState('')

  function handleTextChange(e){
    if(e.target.value === ''){
      setBtnDisabled(true)
      setMessage('')  
    }
    else if(e.target.value !== '' && e.target.value.trim().length<10){
      setMessage('Text must be at leat 10 characters')
      setBtnDisabled(true)
    }
    else {
      setMessage('Good!')
      setTimeout(()=>setMessage(''),3500)
      setBtnDisabled(false) 
    }
    setText((prev)=>e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(text.trim().length>10){
      const newFeedback = {
        rating: Rating,
        text: text,
      }
      //console.log(newFeedback,Rating)
      handleAdd(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={(rating)=>{
          setRating(rating)
          //console.log(rating)
        }}/>
        <div className="input-group">
          <input onChange={handleTextChange} type='text' value={text}   placeholder='Write a review'/>
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
          {messege && <div className="message">{messege}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm