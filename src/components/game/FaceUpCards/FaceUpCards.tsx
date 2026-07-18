import TrainCard from "../TrainCard/TrainCard";
import "./FaceUpCards.css";
import type { TrainCard as TrainCardType } from "../../../types/TrainCard";

type FaceUpCardsProps = {
  cards: TrainCardType[];
};

function FaceUpCards({ cards }: FaceUpCardsProps) {
  return (
    <div className="face-up-cards">
      {cards.map((card) => (
        <TrainCard
          key={card.id}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default FaceUpCards;