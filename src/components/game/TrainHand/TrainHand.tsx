import TrainCard from "../TrainCard/TrainCard";
import "./TrainHand.css";

function TrainHand() {
  return (
    <div className="train-hand">
      <TrainCard color="red" />
      <TrainCard color="red" />
      <TrainCard color="blue" />
      <TrainCard color="green" />
      <TrainCard color="black" />
      <TrainCard color="locomotive" />
    </div>
  );
}

export default TrainHand;