import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const NotFound = React.lazy(() => import("./NotFound"));
const Profile = React.lazy(() => import("./Profile"));
const Login = React.lazy(() => import("./Login"));
const Product = React.lazy(() => import("./Product"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const Services = React.lazy(() => import("./Services"));

function App() {
  return (
    <>
      <Dashboard />
      <hr />
      <Suspense fallback={<div>loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/:id" element={<Services />}></Route>
          <Route
            path="/product"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/about" element={<About />}>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
