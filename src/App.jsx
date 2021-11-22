import './App.sass';
import { MessageList } from "./Components/MessageList";
import { ChatsList } from "./Components/ChatsList/ChatsList";

function App() {

  return (
      <div className="Container">
          <ChatsList />
          <MessageList />
      </div>
  );
}

export default App;
