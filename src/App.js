import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';


function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(()=>{
    const getMyNfts = async () =>{
       const openSeaData = await axios.get(`https://testnets-api.opensea.io/assets?asset_contract_address=0x5Ef6A5918c0de312B49b0a5c26D545cc41112757&order_direction=asc`);
       console.log(openSeaData.data.assets);
       setPunkListData(openSeaData.data.assets);
      }

      return getMyNfts();
  },[])

  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'Bandana'} traits={[{value:7}]} image={''}/>
      <PunkList punkListData={punkListData} />
    </div>


  );
}

export default App;
