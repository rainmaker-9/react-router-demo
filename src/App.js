import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Car from "./Car";
import Bike from "./Bike";
/*
Routes
Route
Link
BrowserRouter
*/
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Routes>
              <Route path="/car" element={<Car />}></Route>
              <Route path="/bike" element={<Bike />}></Route>
              <Route
                index
                element={<h3>Click on Navbar Links to Load Image</h3>}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
