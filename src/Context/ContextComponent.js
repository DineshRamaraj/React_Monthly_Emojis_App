import React from 'react'

const reactContext = React.createContext({
  emojisList: [],
  activeEmoji: '',
  resultCount: 0,
  optionsList: [],
  changeEmojiItem: () => {},
  changeDaysItem: () => {},
  clickEmojiButton: () => {},
  clickCalendarItem: () => {},
})

export default reactContext
