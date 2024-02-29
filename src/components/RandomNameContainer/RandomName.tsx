import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { randomName } from "../../selectors";

const RandomName = () => {
  const nameLoadable = useRecoilValueLoadable(randomName(null));
  const refreshUserInfo = useRecoilRefresher_UNSTABLE(randomName(null));

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
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <h2>Random Name</h2>
      {generateName()}
      <button style={{ marginTop: "10px" }} onClick={refreshUserInfo}>
        Generate a new One!
      </button>
    </div>
  );
};

export default RandomName;
