import React from "react";
import "./App.css";
import UserList from "./UserList.js";
import ProductsList from "./ProductsList.js";
import CompaniesList from "./CompaniesList.js";

function App() {
  return (
    <div className="App">
      <ProductsList />
      <UserList />
      <CompaniesList />
    </div>
  );
}

export default App;
