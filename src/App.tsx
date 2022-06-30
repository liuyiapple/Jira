import React from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnautnenticatedApp } from "./unauthenticated-app";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnautnenticatedApp />}
    </div>
  );
}

export default App;
