import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({rating,text,id,handleClick}){
  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={()=>handleClick(id)}className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{text}</div>
    </Card>

    // <Card 
    //   children={{
    //     first:<div className="num-display">{rating}</div>,
    //     second:<div className="text-display">{text}</div>
    //   }}
    //   />
  )
}

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
export default FeedbackItem;