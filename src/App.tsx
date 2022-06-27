import './App.css';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

function App() {

  return (
    <div className="App">
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <DomRef />
      <MutableRef />
    </div>
  )
}

export default App;
