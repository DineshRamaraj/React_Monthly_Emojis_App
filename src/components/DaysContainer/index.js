import ContextComponent from '../../Context/ContextComponent'
import './index.css'

const DaysContainer = () => (
  <ContextComponent.Consumer>
    {value => {
      const {
        resultCount,
        daysList,
        changeEmojiItem,
        changeDaysItem,
        optionsList,
      } = value

      const onChangeEmojiItem = event => {
        changeEmojiItem(event.target.value)
      }

      const onChangeDaysItem = event => {
        changeDaysItem(event.target.value)
      }

      return (
        <div className="emoji-container">
          <div className="emoji-days-select">
            <select className="select-container" onChange={onChangeEmojiItem}>
              {optionsList.map(eachItem => (
                <option
                  value={eachItem.id}
                  key={eachItem.id}
                  className="option-item"
                >
                  {eachItem.emojiName}
                </option>
              ))}
            </select>
            <select className="select-container" onChange={onChangeDaysItem}>
              {daysList.map(eachItem => (
                <option
                  value={eachItem.id}
                  key={eachItem.id}
                  className="select-container"
                >
                  {eachItem.day}
                </option>
              ))}
            </select>
          </div>
          <h1 className="result-content">0{resultCount}</h1>
        </div>
      )
    }}
  </ContextComponent.Consumer>
)

export default DaysContainer
