import { CircleUserRound, Flag } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  renderCoin,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  const [chosed, setChosed] = useState(false);

  const renderFun = () => {
    let balance = renderCoin(price);
    if (balance) {
      setChosed(!chosed);
      setSelectedPlayer([...selectedPlayer, player]);
      player.chose = true;
      toast(`${player.playerName} selected`);
    }else{
         toast("Not enoungh Coin");
    }
  };

  const {
    playerName,
    playerType,
    id,
    country,
    batStyle,
    bowlStyle,
    rating,
    imgCdn,
    price,
  } = player;

  return (
    <div className="border border-[#ddd] p-4 rounded-xl">
      {/* player img  */}
      <img src={imgCdn} className="w-full h-1/2 rounded-xl mb-2"></img>

      <div className="flex flex-col justify-between h-1/2">
        {/* player name  */}
        <div className="flex gap-1 items-center">
          <CircleUserRound />
          <p className="font-bold text-xl">{playerName}</p>
        </div>

        {/* player type and country  */}
        <div className="flex border-b-1 pb-2 mt-2 border-b-[#ddd] justify-between items-center">
          <div className="flex gap-2 items-center">
            <Flag size={16} strokeWidth={3} absoluteStrokeWidth />
            <p className="text-[14px] text-gray-500">{country}</p>
          </div>
          <div className="  rounded text-[14px] py-1 px-2 bg-[#ddd] ">
            {playerType}
          </div>
        </div>

        {/* player rating  */}
        <div className=" text-[16px] mt-2 font-bold">
          Rating : {rating.toFixed(1)}
        </div>

        {/* player style  */}

        <div className="flex justify-between font-bold text-[12px]">
          <p>{batStyle}</p>
          <p className="text-gray-400">{bowlStyle}</p>
        </div>

        {/* {player price } */}

        <div className="flex items-center justify-between">
          <h5 className="font-bold text-xl">Price: {price}</h5>{" "}
          <button
            disabled={player.chose}
            onClick={renderFun}
            className="btn disabled:btn-accent  h-auto px-2 py-1"
          >
            Chose Player
          </button>
        </div>

        {/* chose button  */}
      </div>
    </div>
  );
};

export default PlayerCard;
