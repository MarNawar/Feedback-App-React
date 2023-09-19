import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback,handleClick}) {
  //console.log(handleClick);

  if(!feedback||feedback.length===0)return <p className='my-3'>No Feedback Yet</p>

  return (
      <div className="feedback-list">
        {feedback.map(({rating,text,id})=>{
          return <FeedbackItem rating = {rating} text={text} id = {id} handleClick={handleClick} key={id}/>
        })}   
      </div>   
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text : PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList