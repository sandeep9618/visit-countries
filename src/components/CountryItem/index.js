const CountryItem = props => {
  const {eachItem, onVisitCountry} = props
  const {isVisited, name, id} = eachItem
  const onVisit = () => {
    onVisitCountry(id)
  }
  return (
    <li className="country-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-heading">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
