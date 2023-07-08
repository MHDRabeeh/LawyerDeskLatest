import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./routes/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
