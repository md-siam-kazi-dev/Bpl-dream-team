import { Suspense } from "react";
import PlayerCardContainer from "./playerCardContainer";

const PlayerMainContainer = () => {
  const playerData = fetch("/data.json").then((res) => res.json());


  return (
    <div className="max-w-[1440px] mx-auto w-19/20 ">
      <div className="max-w-[1440px] mt-10 flex justify-between mx-auto">
        <h4 className="font-bold text-2xl">Available Player</h4>

        <div>
          <button className="btn btn-primary">Available</button>
          <button className="btn">Selected (0)</button>
        </div>
      </div>

      <Suspense fallback={<p>siam</p>}>
        <PlayerCardContainer playerData={playerData}></PlayerCardContainer>
      </Suspense>
    </div>
  );
};
export default PlayerMainContainer;
