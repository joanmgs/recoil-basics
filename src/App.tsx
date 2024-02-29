import CounterContainer from "./components/CounterContainer";
import OperationsContainer from "./components/OperationsContainer";
import RandomNameContainer from "./components/RandomNameContainer";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>RecoilJS</h1>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <CounterContainer />
        <OperationsContainer />
        <RandomNameContainer />
      </div>
    </>
  );
}

export default App;
