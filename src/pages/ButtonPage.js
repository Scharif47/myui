import { GoBell, GoShield, GoStar } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">Primary</Button>
      </div>
      <div>
        <Button secondary outline>
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoStar />
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoBell />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <GoShield />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
