import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary outline>
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;
