import ContextComponent from '../../Context/ContextComponent'

import './index.css'

const CalendarContainer = () => (
  <ContextComponent.Consumer>
    {value => {
      const {datesList, daysList, clickCalendarItem} = value

      return (
        <div className="calendar-container">
          <h1 className="calendar-heading">January</h1>
          <div className="calendar-table-container">
            <ul className="calendar-day-container">
              {daysList.map(eachItem => (
                <li key={eachItem.emojiName} className="day-item">
                  <p className="day-para">{eachItem.day}</p>
                </li>
              ))}
            </ul>
            <ul className="calendar-date-container">
              {datesList.map(eachItem => {
                const onClickCalendarItem = () => {
                  clickCalendarItem(eachItem.id)
                }
                return (
                  <li key={eachItem.id}>
                    <button
                      type="button"
                      className="calendar-button"
                      onClick={onClickCalendarItem}
                    >
                      {eachItem.date}
                      {eachItem.emojiUrl === '' ? null : (
                        <img
                          src={eachItem.emojiUrl}
                          alt={eachItem.emojiName}
                          className="date-emoji"
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }}
  </ContextComponent.Consumer>
)

export default CalendarContainer
