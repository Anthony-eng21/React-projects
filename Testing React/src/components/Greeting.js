import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };
    //when we test more than one unit/component with in another component this is called an INTEGRATION test
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler} >Change Text</button>
    </div>
  );
};

export default Greeting;
