// import {EventsClass} from './components/EventsClass';
// import {EventsClassES7} from './components/EventsClassES7';
import EventsFunctional from './components/EventsFunctional';

const App = () => {
  
  const greatMe = (name) => {
    alert('Hello!!' + name)
  }

  return (
    <>
      <h1>Hola Mundo!!!</h1>
      <hr />
      <EventsFunctional greatMe={greatMe} />
    </>
  )
}

export default App;