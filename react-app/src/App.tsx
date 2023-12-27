import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button
        children={"My Button"}
        onClick={() => console.log("Clicked")}
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
