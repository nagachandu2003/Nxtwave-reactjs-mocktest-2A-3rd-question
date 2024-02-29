import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabItem} = props
  const {displayText} = tabDetails
  const onTab = () => {
    onChangeTabItem(displayText)
  }
  return (
    <li className="list-item2">
      <button onClick={onTab} type="button" className="button2">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
