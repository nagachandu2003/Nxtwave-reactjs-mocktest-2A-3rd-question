import './index.css'

const OptionItem = props => {
  const {optionDetails} = props
  const {optionId, displayText} = optionDetails
  return <option value={optionId}>{displayText}</option>
}

export default OptionItem
