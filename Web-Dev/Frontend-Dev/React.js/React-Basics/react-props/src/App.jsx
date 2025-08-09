import DonationButton from "./components/Donation-Button";
import Greetings from "./components/Greetings";

const App = () => {
  const donateFn = () => {
    alert("Thank You for Donating!");
  };
  return (
    <div>
      <Greetings name="Shrenik" message="Good Morning" />

      <Greetings name="Twinkle" message="Good Morning" />

      <Greetings name="Tejas" message="Good Evening" />

      <DonationButton onDonate={donateFn} />
    </div>
  );
};

export default App;
