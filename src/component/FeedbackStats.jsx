function FeedbackStats({feedback}) {
  let average = feedback.reduce((total,item)=>total+=item.rating,0)/feedback.length
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {(feedback.length===0)? Object(0).toFixed(1) :average}</h4>
    </div>
  )
}

export default FeedbackStats