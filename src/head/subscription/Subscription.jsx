import { useEffect, useRef } from 'react'
import './subscription.css'

const Subscription = (props) => {
  const ref = useRef(null)
  const { onClickOutside } = props

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])

  return (
    <div className="subsc">
      <div
        className="socical_media"
        target={props.showSearchBar ? 'nn' : '_s_media'}
      >
        <img
          className="facebook"
          src="/subscripeImages/facebook.png"
          alt="facebook"
        />
        <img
          className="twitter"
          src="/subscripeImages/twitter.png"
          alt="twitter"
        />
        <img
          className="instagram"
          src="/subscripeImages/instagram.png"
          alt="instagram"
        />
        <img
          ref={ref}
          className="searchIcon"
          src="/subscripeImages/search.png"
          alt="search"
          onClick={() => onClickOutside(true)}
        />
        {props.showSearchBar && (
          <form className="searchInput" ref={ref}>
            <input className="searchInput" autoFocus />
          </form>
        )}
      </div>
    </div>
  )
}

export default Subscription
