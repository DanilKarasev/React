import './App.sass';
import { MessageList } from "./Components/MessageList";

function App() {

  return (
      <div className="App">
          <header className="App-header">
              <div className="Wrapper">
                  <div className="Chat-header">OutstandingChat</div>
                  <MessageList />
              </div>
          </header>
      </div>
  );
}

export default App;
