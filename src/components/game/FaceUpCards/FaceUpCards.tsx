import TrainCard from "../TrainCard/TrainCard";
import "./FaceUpCards.css";
import type { TrainCard as TrainCardType } from "../../../core/models/TrainCard";

type FaceUpCardsProps = {
  cards: TrainCardType[];
  onCardClick?: (cardIndex: number) => void;
};

function FaceUpCards({ cards, onCardClick }: FaceUpCardsProps) {
  return (
    <div className="face-up-cards">
      {cards.map((card, index) => (
        <TrainCard
          key={card.id}
          color={card.color}
          onClick={() => onCardClick?.(index)}
        />
      ))}
    </div>
  );
}

export default FaceUpCards;