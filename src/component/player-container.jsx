import { Suspense, useState } from "react";
import PlayerCardContainer from "./playerCardContainer";
import Selected from "./selected";
import { toast } from "react-toastify";


const playerData = (fetch("/data.json").then((res) => res.json()) )
const PlayerMainContainer = ({setCoin,coin,setSelectedPlayer,selectedPlayer}) => {
   
  

  let [available,setAvailable] = useState(0);
  let [selected,setSelected] = useState(0);
  const [btn,setBtn] = useState('available'); 

  const renderCoin = (coinValue) => {
    if((coin - coinValue) > 0){
      setCoin(coin - coinValue);
      return true;
    }else {
     
      return false;
    }
    
    console.log(coin);
  }

  


  return (
    <div className="max-w-[1440px] mx-auto w-19/20 ">
      <div className="max-w-[1440px] mt-10 flex justify-between mx-auto">
        <h4 className="font-bold text-2xl">Available Player</h4>

        <div>
          <button className={(btn === 'available'? 'btn btn-primary':'btn')} onClick={() => setBtn('available')}>Available({available})</button>

          <button className={(btn === 'selected'?'btn btn-primary':'btn')} onClick={() => setBtn('selected')}>Selected ({selected})</button>
        </div>
      </div>

      {btn === 'available'? <Suspense fallback={<p>Loading......</p>}>
        <PlayerCardContainer playerData={playerData} setAvailable={setAvailable} setSelected={setSelected} setCoin={setCoin} renderCoin={renderCoin} setSelectedPlayer = {setSelectedPlayer} selectedPlayer = {selectedPlayer}></PlayerCardContainer>
      </Suspense> : <Selected setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} renderCoin={renderCoin} setSelected={setSelected}/>}
    </div>
  );
};
export default PlayerMainContainer;
