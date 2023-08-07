import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date(2023, 1, 3),
      description: "Шаурма",
      amount: 180,
    },
    {
      date: new Date(2023, 2, 14),
      description: "телефон",
      amount: 5000,
    },
    {
      date: new Date(2023, 5, 11),
      description: "Футболка",
      amount: 940,
    },
  ];

  return (
    <div>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
