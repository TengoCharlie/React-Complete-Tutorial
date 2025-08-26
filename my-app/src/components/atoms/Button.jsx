/**
 * Atom: Button
 * -------------
 * Another simple building block. Calls the handler passed via props
 * to notify parents when clicked.
 */
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
