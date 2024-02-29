import { useRecoilValue } from "recoil";
import { clicksOperated } from "../../selectors";

const Operations = () => {
  const { duplicated, sumByTwo } = useRecoilValue(clicksOperated);
  return (
    <>
      <h2>Operations over counter</h2>
      <ul>
        <li>Counter duplicated: {duplicated}</li>
        <li>Counter plus two: {sumByTwo}</li>
      </ul>
    </>
  );
};

export default Operations;
