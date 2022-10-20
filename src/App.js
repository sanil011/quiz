import Quiz from "./Quiz";
import { useState } from "react";
import End from "./End";
import { useSelector, useDispatch } from "react-redux";
import Start from "./Start";

function App() {
  const dispatch = useDispatch();
  const { step, answers } = useSelector((state) => state?.quiz);
  const [show, setShow] = useState(0);
  console.log(step)
  return (
    <>
      {step === 1 && <Start/>}
      {step === 3 && <End/>}
        { step === 2 && <Quiz setShow={setShow} />}
    </>
  );
}

export default App;
