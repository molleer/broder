import React, { useState } from "react";
import Header from "./Header";
import DrivingForm from "./Driving.form";
import RefuelingForm from "./Refueling.form";

const users = ["Stefan", "Robert", "Chrille"];

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DrivingForm users={users} onSubmit={data => console.log(data)} />
        <RefuelingForm users={users} onSubmit={data => console.log(data)} />
      </div>
    </>
  );
}

export default App;
