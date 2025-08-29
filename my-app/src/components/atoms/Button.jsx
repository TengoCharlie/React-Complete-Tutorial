/**
 * Atom: Button
 * -------------
 * Atoms are the smallest building blocks.
 * This button shows prop usage and event handling.
 */
export default function Button({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        background: '#4285F4',
        color: '#fff',
        ...style,
      }}
    >
      {children}
    </button>
  )
}
