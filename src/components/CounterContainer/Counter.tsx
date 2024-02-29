import { useRecoilState } from "recoil";
import { numberOfClicks } from "../../atoms";

const Counter = () => {
  const [clicks, setClicks] = useRecoilState(numberOfClicks);

  const handleButton = () => {
    setClicks(clicks + 1);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}
    >
      <h2>Counter</h2>
      <strong style={{ fontSize: 40 }}>{clicks}</strong>
      <button onClick={handleButton}>Increase by one!</button>
    </div>
  );
};

export default Counter;
