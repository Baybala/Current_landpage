const Select = ({ className, data, label }) => {
  return (
    <div className="form-floating">
      <select
        className={className}
        id="floatingSelect"
        aria-label="Floating label select example"
        required
      >
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor="floatingSelect">{label}</label>
    </div>
  )
}

export default Select
