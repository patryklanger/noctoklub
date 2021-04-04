import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
