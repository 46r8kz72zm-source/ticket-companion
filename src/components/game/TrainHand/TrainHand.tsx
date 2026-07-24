import TrainCard from "../TrainCard/TrainCard";
import "./TrainHand.css";

import type { TrainCard as TrainCardType } from "../../../core/models/TrainCard";

type TrainHandProps = {
  cards: TrainCardType[];
};

function TrainHand({ cards }: TrainHandProps) {
  return (
    <div className="train-hand">
      {cards.map((card) => (
        <TrainCard
          key={card.id}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default TrainHand;