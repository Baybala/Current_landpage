import { HashLink } from 'react-router-hash-link'
import './navbar.css'

const Navbar = () => {
  const scrollOffset = () => {
    return (el) => el.scrollIntoView({ block: 'center' })
  }

  return (
    <div className="navbar">
      <div>
        <HashLink to="/#home">
          <p className="home">Home</p>
        </HashLink>
        <HashLink to="/#info" scroll={scrollOffset()}>
          <p className="about">About</p>
        </HashLink>
        <HashLink to="/#models" scroll={scrollOffset()}>
          <p className="models">Models</p>
        </HashLink>
        <HashLink to="/#testimonials" scroll={scrollOffset()}>
          <p className="feedbacks">Testimonial</p>
        </HashLink>
        <HashLink to="/#faq" scroll={scrollOffset()}>
          <p className="contact">FAQ</p>
        </HashLink>
      </div>
    </div>
  )
}

export default Navbar
