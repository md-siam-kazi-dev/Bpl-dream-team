import { use, useState } from 'react'
import Banner from './component/banner'
import NavBar from './component/navBar'
import PlayerMainContainer from './component/player-container'
import './index.css'
import { ToastContainer } from 'react-toastify'
function App() {
  
  const [coin,setCoin] = useState(20000)

  const [selectedPlayer,setSelectedPlayer] = useState([]);

  return (
    <>
    <NavBar coin = {coin}></NavBar>
    <Banner />
    <PlayerMainContainer coin={coin} setCoin = {setCoin} setSelectedPlayer = {setSelectedPlayer} selectedPlayer = {selectedPlayer}/>
     <ToastContainer />
     
    </>
  )
}

export default App
