import { use } from "react";
import PlayerCard from "./playerCard";

const PlayerCardContainer =({playerData}) =>{
    let playerInfo = use(playerData);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {playerInfo.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)}
        </div>
    )
}
export default PlayerCardContainer;