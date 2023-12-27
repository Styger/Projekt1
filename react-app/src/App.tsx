import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  const [alsertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alsertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button
        children={"My Button"}
        onClick={() => setAlertVisibility(true)}
        color="danger"
      ></Button>
    </div>
  );
}

export default App;

/*import ListGroup from "./components/ListGroup";

import { Fragment } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;

*/
