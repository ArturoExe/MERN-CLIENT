import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <GoogleOAuthProvider clientId="849576298921-u9b9q7n2aken2ra9d8sdiav13t2d48p1.apps.googleusercontent.com">
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/posts" exact element={<Home />}></Route>
            <Route path="/" exact element={<Navigate to="/posts" />}></Route>
            <Route path="/posts/search" exact element={<Home />}></Route>
            <Route path="/posts/:id" exact element={<PostDetails />}></Route>
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate to="/posts" />}
            ></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
