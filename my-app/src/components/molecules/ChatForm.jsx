import { useState } from "react";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";

/**
 * Molecule: ChatForm
 * ------------------
 * Combines atom components and handles local form state.
 * Demonstrates prop drilling by notifying parent components
 * via the onSend callback when the user submits a message.
 */
const ChatForm = ({ onSend }) => {
  // Local state for the text typed by the user
  const [text, setText] = useState("");

  // Handler that returns the message to the parent
  const handleSubmit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText(""); // reset local state
  };

  return (
    <div>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about the weather..."
      />
      <Button onClick={handleSubmit}>Send</Button>
    </div>
  );
};

export default ChatForm;
