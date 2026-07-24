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

  onClick?: () => void;
};

function TrainCard({ color, onClick }: TrainCardProps) {
  return (
    <div
      className={`train-card train-card--${color}`}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {color === "locomotive" ? "🚂" : color.toUpperCase()}
    </div>
  );
}

export default TrainCard;