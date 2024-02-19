import ContextComponent from '../../Context/ContextComponent'

import './index.css'

const EmojiContainer = () => (
  <ContextComponent.Consumer>
    {value => {
      const {emojisList, activeEmoji, clickEmojiButton} = value

      return (
        <ul className="emoji-list-container">
          {emojisList.map(eachItem => {
            const onClickEmojiButton = () => {
              clickEmojiButton(eachItem.id)
            }
            return (
              <li
                className={`emoji-item ${
                  eachItem.id === activeEmoji ? 'emoji-active' : null
                }`}
                key={eachItem.id}
              >
                <button
                  type="button"
                  className="emoji-item-button"
                  onClick={onClickEmojiButton}
                >
                  <p className="emoji-name">{eachItem.emojiName}</p>
                  <img
                    src={eachItem.emojiUrl}
                    alt={eachItem.emojiName}
                    className="emoji-image"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      )
    }}
  </ContextComponent.Consumer>
)

export default EmojiContainer
