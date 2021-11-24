import './App.sass';
import { MessageList } from "./Components/MessageList";
import { ChatsList } from "./Components/ChatsList/ChatsList";
import { Router } from "./Router/Router"

function App() {

  return (
      <div className="Container">
          <Router/>
          {/*<ChatsList />*/}
          {/*<MessageList />*/}
      </div>
  );
}

export default App;
