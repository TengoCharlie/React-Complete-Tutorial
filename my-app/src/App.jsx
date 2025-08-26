/**
 * Root App component
 * ------------------
 * Wraps the application with providers (like ThemeProvider)
 * and renders the main page.
 */
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import "./App.css";

function App() {
  return (
    // Context provider supplies theme values to the component tree
    <ThemeProvider>
      {/* Pages represent full screens in atomic design */}
      <ChatPage />
    </ThemeProvider>
  );
}

export default App;
