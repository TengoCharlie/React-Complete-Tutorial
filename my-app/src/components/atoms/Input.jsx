/**
 * Atom: Input
 * -------------
 * Small, reusable component. Receives props and emits change events.
 */
const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="chat-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
