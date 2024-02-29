import Counter from "./Counter";
import { useSetRecoilState } from "recoil";
import { numberOfClicks } from "../../atoms";

const CounterContainer = () => {
  const setClicks = useSetRecoilState(numberOfClicks);

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <Counter />
      <button onClick={() => setClicks(0)}>Reset state to zero</button>
    </div>
  );
};

export default CounterContainer;
