import "./TrainCard.css";

type TrainCardProps = {
  color:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "black"
    | "white"
    | "orange"
    | "pink"
    | "locomotive";
};

function TrainCard({ color }: TrainCardProps) {
  return (
    <div className={`train-card train-card--${color}`}>
      {color === "locomotive" ? "🚂" : color.toUpperCase()}
    </div>
  );
}

export default TrainCard;