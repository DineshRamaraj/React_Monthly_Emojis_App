import {Component} from 'react'

import CalendarContainer from './components/CalendarContainer'
import EmojiContainer from './components/EmojiContainer'
import DaysContainer from './components/DaysContainer'

import ContextComponent from './Context/ContextComponent'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

// Replace your code here
class App extends Component {
  state = {
    datesList: initialDatesList,
    activeEmoji: emojisList[0].id,
    resultCount: 0,
    emojiId: emojisList[0].id,
    daysId: daysList[0].id,
    optionsList: emojisList,
  }

  changeResultCount = () => {
    const {datesList, emojiId, daysId} = this.state
    const emojiItem = emojisList.find(eachItem => eachItem.id === emojiId)
    const dayItem = daysList.find(eachItem => eachItem.id === daysId)
    this.setState({emojiId: emojiItem.id, daysId: dayItem.id})
    // console.log(emojiItem, dayItem)
    console.log(emojiItem.emojiName)

    const dateListContent = datesList.filter(
      eachItem => eachItem.emojiName === emojiItem.emojiName,
    )
    let dateItem

    if (dayItem.day === 'Sun') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 1,
      )
    } else if (dayItem.day === 'Mon') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 2,
      )
    } else if (dayItem.day === 'Tue') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 3,
      )
    } else if (dayItem.day === 'Wed') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 4,
      )
    } else if (dayItem.day === 'Thu') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 5,
      )
    } else if (dayItem.day === 'Fri') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 6,
      )
    } else if (dayItem.day === 'Sat') {
      dateItem = dateListContent.filter(
        eachItem => parseInt(eachItem.date) % 7 === 0,
      )
    }

    this.setState({resultCount: dateItem.length})
  }

  changeEmojiItem = id => {
    this.setState({emojiId: id}, this.changeResultCount)
  }

  changeDaysItem = id => {
    this.setState({daysId: id}, this.changeResultCount)
  }

  clickEmojiButton = id => {
    this.setState({activeEmoji: id})
  }

  clickCalendarItem = id => {
    const {activeEmoji} = this.state

    this.setState(
      prevState => ({
        datesList: prevState.datesList.map(eachItem => {
          const emoji = emojisList.find(eachOne => eachOne.id === activeEmoji)

          console.log(eachItem.emojiName)

          if (eachItem.id === id && eachItem.emojiName === emoji.emojiName) {
            return {...eachItem, emojiUrl: '', emojiName: ''}
          }

          if (eachItem.id === id) {
            return {
              ...eachItem,
              emojiUrl: emoji.emojiUrl,
              emojiName: emoji.emojiName,
            }
          }

          return eachItem
        }),
      }),
      this.changeResultCount,
    )
  }

  render() {
    const {datesList, activeEmoji, resultCount, optionsList} = this.state
    return (
      <ContextComponent.Provider
        value={{
          emojisList,
          daysList,
          datesList,
          activeEmoji,
          resultCount,
          optionsList,
          changeEmojiItem: this.changeEmojiItem,
          changeDaysItem: this.changeDaysItem,
          clickEmojiButton: this.clickEmojiButton,
          clickCalendarItem: this.clickCalendarItem,
        }}
      >
        <>
          <div className="main-app-container">
            <h1 className="app-heading">Monthly Emojis</h1>
            <div className="app-container">
              <CalendarContainer />
              <div className="emoji-days-container">
                <EmojiContainer />
                <DaysContainer />
              </div>
            </div>
          </div>
        </>
      </ContextComponent.Provider>
    )
  }
}

export default App
