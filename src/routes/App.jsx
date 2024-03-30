import { Link, Outlet } from "react-router-dom";
import Header from "../components/header";

const App = () => {
  return (
    <div>
    <div id="detail">
          <Outlet></Outlet>
        </div>
    </div>
  );
};

export default App;
