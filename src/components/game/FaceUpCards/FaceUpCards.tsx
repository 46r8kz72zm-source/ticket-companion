import TrainCard from "../TrainCard/TrainCard";
import "./FaceUpCards.css";
import type { TrainCard as TrainCardType } from "../../../types/TrainCard";

function FaceUpCards() {
  const cards: TrainCardType[] = [
    { id: "1", color: "red" },
    { id: "2", color: "blue" },
    { id: "3", color: "green" },
    { id: "4", color: "yellow" },
    { id: "5", color: "locomotive" },
  ];

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