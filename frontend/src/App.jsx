import React, { useState } from "react";
import Header from "./Header";
import DrivingForm from "./Driving.form";
import RefuelingForm from "./Refueling.form";
import Axios from "axios";

const users = ["Stefan", "Robert", "Chrille"];

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DrivingForm
          users={users}
          onSubmit={data =>
            Axios.post("/api/driving", data)
              .then(res => console.log("OK!"))
              .catch(err => {
                console.log("Unable to send drive!");
                console.log(err);
              })
          }
        />
        <RefuelingForm
          users={users}
          onSubmit={data =>
            Axios.post("/api/refueling", data)
              .then(res => console.log("OK!"))
              .catch(err => {
                console.log("Unable to send refueling");
                console.log(err);
              })
          }
        />
      </div>
    </>
  );
}

export default App;
