import { Delete } from "lucide-react";

const Selected = ({selectedPlayer,setSelected,setSelectedPlayer}) => {
    console.log(selectedPlayer)
    const renderFunction = async(player) => {
        player.chose = false;

        let temp = await selectedPlayer.filter(x => x.id != player.id);
        await setSelectedPlayer(temp);




       await setSelected(selectedPlayer.length-1)
    }
    return (
        <>
         <div className="max-w-[1440px] mx-auto gap-2 w-19/20 flex flex-col">
          {
            (selectedPlayer.length != 0 ? selectedPlayer.map(player => {
                return (
                    <div key={player.id} className="w-full p-2  rounded shadow flex justify-between">
                        {player.playerName}
                        <Delete onClick={()=>renderFunction(player)}></Delete>
                    </div>
                )
            }) : <div className="max-w-[1440px] flex justify-center items-center h-50 mx-auto">NODATA</div>)
          }
         </div>
        </>
    )
}
export default Selected;