import './navigation.css'

const FootNavigation = () => {
  return (
    <div className="footer_nav">
      <div className="footer_contact_info">
        <h5>
          <b>Car</b> Rental
        </h5>
        <p style={{ fontSize: '12px', paddingRight: '10px' }}>
          We offer a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs
        </p>
        <p style={{ fontSize: '13px' }}>
          <img src="./people/phone.png" alt="phone" />
          <b>+994(51) 421 73 74</b>
        </p>
        <p style={{ fontSize: '13px', marginTop: '-15px' }}>
          <img src="./people/email.png" alt="email" />
          <b>rustamov.b@hotmail.com</b>
        </p>
      </div>
      <div className="footer_nav_tabs">
        <h5>
          <b>COMPANY</b>
        </h5>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className="footer_nav_working_hours">
        <h5>
          <b>WORKING HOURS</b>
        </h5>
        <p>Mon - Fri.: 9:00AM - 9:00PM</p>
        <p>Sat.: 9:00AM - 7:00PM</p>
        <p>Sun.: Closed</p>
      </div>
      <div className="footer_subscribe">
        <h5>
          <b>SUBSCRIPTION</b>
        </h5>
        <p>Subscribe your email adress for latest news & updates</p>
        <form>
          <input type="email" id="lname" />
          <button
            className="btn btn-primary"
            target="submitButton"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FootNavigation
