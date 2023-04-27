import "./App.css";
import UsePaginatedData from "./usePaginatedData";

function App() {
  const [loading, data] = UsePaginatedData(3);
  return <div></div>;
}

export default App;
