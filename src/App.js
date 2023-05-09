import { Fragment } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Sidebar from "./components/sidebar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="font-major">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-screen h-calc-vh flex fixed top-14">
        {/* sidebar */}
        <div className="w-64 bg-white h-full">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
