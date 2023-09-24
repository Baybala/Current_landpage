import Accordion from 'react-bootstrap/Accordion'
import './faq.css'

const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq_head">
        <p style={{ fontSize: '14px' }}>
          <b>FAQ</b>
        </p>
        <h5>
          <b>FREQUENTLY ASKED QUESTIONS</b>
        </h5>
        <p style={{ fontSize: '12px', paddingTop: '15px' }}>
          Frequently Asked Questions About the Car Rental Process On Our Website
          Answer to Common Concerns and inquiries
        </p>
      </div>
      <div className="faq_Body">
        <Accordion defaultActiveKey="0" className="def">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header">
              <b>1. What is special about comparing rental car details?</b>
            </Accordion.Header>
            <Accordion.Body>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. by comparing verious options you can
              find deals that offer lower prices, additional services or beter
              car models. you can find car rental deals by researching online
              and comparing prices from different rental companies.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <b>2. How do I find the car rental deals?</b>
            </Accordion.Header>
            <Accordion.Body>
              you can find car rental deals by researching online and comparing
              prices from different rental companies. Website such us Expedia,
              Kayak, and Travelocity allowing you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <b>3. How can I find such low rental car prices?</b>
            </Accordion.Header>
            <Accordion.Body>
              Book in advance: Booking your rental car ahead of time can offer
              result in lower prices. Compare prices from multiple companies:
              Use website like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
