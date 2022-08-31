import Arrangement from "components/Layout/Arrangement";
import {useState} from "react";

function App() {
    const [values, setValues] = useState({
        color: '#FFFFFF',
        width: 100,
        height: 100,
        transparency: 25,
        blur: 5,
        outline: 25,
        radius: 5,
    });
  return (
      <>
          <Arrangement values={values} setValues={setValues} />
      </>
  );
}

export default App;
