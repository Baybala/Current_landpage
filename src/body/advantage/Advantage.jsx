import { useEffect, useRef, useState } from 'react'
import './advantage.css'
import ListItems from './listItems'

const Advantage = () => {
  const [bodyClassName, setBodyClassName] = useState('advantageWindow')
  const [chooseUsRefClassName, setChooseUsRefClassName] = useState('chooseUS')
  const bodyRef = useRef()
  const chooseUsRef = useRef()

  useEffect(() => {
    function reveal() {
      const bodyElementTop =
        bodyRef.current && bodyRef.current.getBoundingClientRect().top
      const chooseUsElementTop =
        chooseUsRef.current && chooseUsRef.current.getBoundingClientRect().top
      const screenHeight = window.screen.height

      if (bodyElementTop < screenHeight) {
        setBodyClassName('advantageWindowActive')
      }

      if (chooseUsElementTop + 100 < screenHeight) {
        setChooseUsRefClassName('chooseUSActive')
      }
    }

    window.addEventListener('scroll', reveal)
  }, [])

  return (
    <div className={bodyClassName} ref={bodyRef}>
      <div className="advent_head">
        <h3>Save big with our cheap car rental!</h3>
        <p>
          Top Airports. Local Suppliers. <b style={{ color: 'red' }}>24/7</b>{' '}
          Support
        </p>
      </div>
      <div className="advent_body">
        <img src="./Advantage/genImage.png" alt="advantage" />
        <div className={chooseUsRefClassName} ref={chooseUsRef}>
          <div className="left">
            <p>
              <b>Why Choose Us</b>
            </p>
            <h3 style={{ color: 'red' }}>
              <b>Best valued deals you will ever find</b>
            </h3>
            <p style={{ fontSize: '13px' }}>
              Discover the best deals you will ever find with our unbeatable
              offers. We've dedicated to providing you with with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you with
              the ultemate renting experience, so don't miss out on your chance
              to save big.
            </p>
          </div>

          <div className="right">
            <div className="items">
              <ListItems
                className="item"
                icon="./icons/quality.png"
                item="QUALITY SERVICES"
                description="You’ll be pleasantly surprised by the high level of service
                  via the Internet or in our office"
              />
              <ListItems
                className="item"
                icon="./icons/moneySave.png"
                item="SAVE MONEY"
                description="In our company, you will find a large number of popular cars with the most attractive prices"
              />

              <ListItems
                className="item"
                icon="./icons/discount.png"
                item="DISCOUNTS & SPECIAL OFFERS"
                description="There are a large number of special events and conditions for customers of our company"
              />

              <ListItems
                className="item"
                icon="./icons/timesave.png"
                item="SAVING TIME"
                description="You will spend less than 15 minutes for ordering and registration of the car in our company"
              />

              <ListItems
                className="item"
                icon="./icons/individual.png"
                item="INDIVIDUAL APPROACH"
                description="In accordance with the requirements and wishes of the client, we can find special conditions and vehicles"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage
