import Dashboard from "./Components/Dashboard/Dashboard.component";
import Mobile from "./Components/Mobile";
function App() {
  return (
    <div className="bg-white xl:w-[1000px] xl:mx-auto xl:grid h-screen place-items-center">
      <Dashboard />
      <Mobile />
    </div>
  );
}

export default App;
