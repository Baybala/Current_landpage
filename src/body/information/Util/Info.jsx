const Info = ({ className, path, alt, label, info }) => {
  return (
    <div className={className}>
      <img src={path} alt={alt} />
      <br />
      <br />
      <h6>
        <b>{label}</b>
      </h6>
      <p>{info}</p>
    </div>
  )
}

export default Info
