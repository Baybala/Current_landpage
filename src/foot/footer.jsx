import './footer.css'
import FootNavigation from './footerNav/navigation'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_head">
        <div className="footer_head_info">
          <h3>
            <b>Download our app to get most out of it</b>
          </h3>
          <p>
            Thrown shy ten ladies though ask saw. Or by to he going think order
            event music. Incommode so intention defective at convinced. Led
            income month itself and houses you.
          </p>
          <img
            style={{ marginRight: '20px' }}
            src="./people/googlePlay.png"
            alt="googlePlay"
          />
          <img src="./people/appStore.png" alt="appStore" />
        </div>
        <div className="footer_head_phoneImage">
          <img src="./people/mobileApp.png" alt="phoneImage" />
        </div>
      </div>
      <FootNavigation />
    </div>
  )
}

export default Footer
