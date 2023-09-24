import { HashLink } from 'react-router-hash-link'

const ReserveButton = () => {
  return (
    <HashLink
      to="/#reservation"
      scroll={(el) => el.scrollIntoView({ block: 'center' })}
    >
      <button className="btn btn-primary mt-1">RESERVE NOW</button>
    </HashLink>
  )
}

export default ReserveButton
