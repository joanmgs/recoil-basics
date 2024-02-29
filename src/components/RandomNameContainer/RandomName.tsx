import { useRecoilValueLoadable } from "recoil";
import { randomName } from "../../selectors";

const RandomName = () => {
  const nameLoadable = useRecoilValueLoadable(randomName);

  const generateName = () => {
    switch (nameLoadable.state) {
      case "hasValue":
        return (
          <strong style={{ fontSize: "35px" }}>{nameLoadable.contents}</strong>
        );
      case "loading":
        return <div style={{ fontSize: "35px" }}>Loading...</div>;
      case "hasError":
        throw nameLoadable.contents;
    }
  };

  return (
    <div style={{ width: "300px" }}>
      <h2>Random Name</h2>
      {generateName()}
      <button style={{ marginTop: "10px" }} onClick={generateName}>
        Generate a new One!
      </button>
    </div>
  );
};

export default RandomName;
