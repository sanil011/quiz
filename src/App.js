import Quiz from "./Quiz";
import End from "./End";
import { useSelector} from "react-redux";
import Start from "./Start";
import './style.css'
function App() {
const { step } = useSelector((state) => state?.quiz);


  return (
    <>
      {step === 1 && <Start/>}
      {step === 3 && <End/>}
      {step === 2 && <Quiz/>}
    </>
  );
}

export default App;
