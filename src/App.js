import Arrangement from "components/Arrangement";
import {useState} from "react";
import Preview from "components/Preview";

function App() {
    const [values, setValues] = useState({
        color: '#FFFFFF',
        width: 100,
        height: 100,
        transparency: 10,
        blur: 3.3,
        outline: 9,
        radius: 5,
    });
  return (
      <div style={{
          display: 'flex',
          gap: '10px',
      }}>
          <Arrangement values={values} setValues={setValues} />
          <Preview values={values} />
      </div>
  );
}

export default App;
