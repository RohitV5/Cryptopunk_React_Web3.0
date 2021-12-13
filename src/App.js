import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'Bandana'} traits={[{value:7}]} image={''}/>
    </div>


  );
}

export default App;
