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
import RequestedSurvey from "./screens/RequestedSurvey";
import Sidebar from "./components/sidebar";
import CreateSurvey from "./screens/CreateSurvey";
import MySurvey from "./screens/MySurvey";
import SurveyName from "./screens/SurveyName";
import Questions from "./screens/Questions";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="my-survey" element={<Home />}>
          <Route index element={<MySurvey />} />
          <Route path="create-survey" element={<CreateSurvey />}>
            <Route index element={<SurveyName />} />
            <Route path="question" element={<Questions />} />
          </Route>
        </Route>
        <Route path="requested-surveys" element={<RequestedSurvey />} />
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
