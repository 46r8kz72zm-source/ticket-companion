import TrainCard from "../TrainCard/TrainCard";
import "./TrainHand.css";
import { gameState } from "../../../data/GameState";

function TrainHand() {
  return (
    <div className="train-hand">
      {gameState.hand.map((card) => (
        <TrainCard
          key={card.id}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default TrainHand;