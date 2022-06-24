import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { User } from './components/state/User';
import { Status } from './components/Status';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne' 
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name="Ulrich" isLoggedIn={true} />  
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}></Button>
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
      <User />
    </div>
  )
}

export default App;
