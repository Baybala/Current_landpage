import { useEffect, useState, useRef } from 'react'
import FeedbackAuthor from './author'
import './feedback.css'

const Feedback = () => {
  const feedbackTextRef = useRef(null)
  const [feedbackClass1, setFeedbackClass1] = useState('feedback_text')
  const [feedbackClass2, setFeedbackClass2] = useState('feedback_text')

  useEffect(() => {
    function reveal() {
      const windowTopFeedbback1 =
        feedbackTextRef.current &&
        feedbackTextRef.current.getBoundingClientRect().top
      const screenHeight = window.screen.height

      if (windowTopFeedbback1 < screenHeight) {
        setFeedbackClass1('feedback_text_Active')
      }
      if (windowTopFeedbback1 < screenHeight - 150) {
        setFeedbackClass2('feedback_text_Active')
      }
    }

    window.addEventListener('scroll', reveal)
  })

  return (
    <div className="feedback" id="testimonials">
      <div className="feedback_head">
        <p className="head_p">
          <b>Reviewed by People</b>
        </p>
        <h4>
          <b>Client's Testimonials</b>
        </h4>
        <p style={{ fontSize: '13px' }}>
          Discover the positive impact we've made on the our clients by reading
          through their feedback. Our clients have experienced our srvices and
          results and they are eager to share their positive experience with us
        </p>
      </div>
      <div className="feedback_body">
        <FeedbackAuthor
          className={feedbackClass1}
          authorName="Parry Hoter"
          city="Belgrade"
          feedbackTest="We rent a car from a website and had amazing experience! The
            booking was easy and the rental rates were very affordable"
          avator="./people/feedback1.jpg"
          textRef={feedbackTextRef}
        />
        <FeedbackAuthor
          className={feedbackClass2}
          authorName="Parry Hoter"
          city="Belgrade"
          feedbackTest="The car was in a grat condition made our trip even better. highly recomended for this car rental website"
          avator="./people/feedback2.jpg"
        />
      </div>
    </div>
  )
}

export default Feedback
