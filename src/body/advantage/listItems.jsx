const ListItems = ({ className, icon, item, description }) => {
  return (
    <div className={className}>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <p>
          <b>{item}</b>
        </p>
        <p style={{ fontSize: '13px' }}>{description}</p>
      </div>
    </div>
  )
}

export default ListItems
