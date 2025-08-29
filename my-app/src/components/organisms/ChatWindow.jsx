import { useEffect, useRef } from 'react'

/**
 * Organism: ChatWindow
 * --------------------
 * Renders the list of chat messages. Demonstrates how
 * components receive data via props and use side effects.
 */
const ChatWindow = ({ messages }) => {
  const endRef = useRef(null)

  // Side effect: scroll to bottom whenever messages change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div style={{ maxHeight: '60vh', overflowY: 'auto', border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      {messages.map((m, i) => (
        <p key={i}>
          <strong>{m.role === 'user' ? 'You' : 'Bot'}:</strong> {m.content}
        </p>
      ))}
      <div ref={endRef} />
    </div>
  )
}

export default ChatWindow
