import Dashboard from "./Components/Dashboard/Dashboard.component";
import Mobile from "./Components/Mobile";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="bg-white xl:w-[1350px]  2xl:w-[1200px] xl:mx-auto xl:grid h-screen place-items-center">
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
      </Routes>
      
      <Mobile />
    </div>
  );
}

export default App;
