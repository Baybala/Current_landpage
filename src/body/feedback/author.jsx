import './feedback.css'

const FeedbackAuthor = ({
  authorName,
  city,
  feedbackTest,
  avator,
  textRef,
  className,
}) => {
  return (
    <div className="feedback_author1">
      <div className={className} ref={textRef}>
        <p style={{ fontSize: '14px' }}>
          <i>
            <b>{feedbackTest}</b>
          </i>
        </p>
      </div>
      <div className="author">
        <div className="author_image">
          <img src={avator} alt="feedback1" />
        </div>
        <div className="author_detail">
          <p>{authorName}</p>
          <h6>{city}</h6>
        </div>
        <div className="quote_image">
          <img src="./people/quote.png" alt="quote" />
        </div>
      </div>
    </div>
  )
}

{
}

export default FeedbackAuthor
