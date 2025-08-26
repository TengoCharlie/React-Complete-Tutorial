import { useEffect } from 'react'
import ChatForm from '../components/molecules/ChatForm.jsx'
import ChatWindow from '../components/organisms/ChatWindow.jsx'
import { useChatStore } from '../store/chatStore.js'
import { useTheme } from '../context/useTheme.js'

/**
 * Page: ChatPage
 * --------------
 * Brings together molecules, organisms and global state.
 * Demonstrates local & global state, context, effects and prop drilling.
 */
const ChatPage = () => {
  // Global state & actions from Zustand
  const messages = useChatStore((s) => s.messages)
  const sendMessage = useChatStore((s) => s.sendMessage)

  // Context consumption: theme values shared without props
  const { dark, toggle } = useTheme()

  // Side effect: log conversation whenever it changes
  useEffect(() => {
    console.log('Conversation', messages)
  }, [messages])

  return (
    <div
      style={{
        background: dark ? '#333' : '#eee',
        minHeight: '100vh',
        color: dark ? '#fff' : '#000',
        padding: '1rem',
      }}
    >
      <h2>Weather Chat</h2>
      {/* Data passed down to organism via props */}
      <ChatWindow messages={messages} />
      {/* Prop drilling: onSend passed to molecule then atoms */}
      <ChatForm onSend={sendMessage} />
      {/* Context-driven button */}
      <button onClick={toggle}>Toggle {dark ? 'Light' : 'Dark'} Mode</button>
    </div>
  )
}

export default ChatPage
