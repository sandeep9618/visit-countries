const VisitedCountryItem = props => {
  const {eachItem, onRemoveVisitedState} = props
  const {imageUrl, name, id} = eachItem

  const onRemove = () => {
    onRemoveVisitedState(id)
  }
  return (
    <li className="visited-container">
      <img className="img" src={imageUrl} alt="thumbnail" />
      <div className="country-and-remove-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
