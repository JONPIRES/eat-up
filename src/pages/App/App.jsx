import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../Home/HomePage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        {user ? (
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            {/* this should be the last route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
          </Routes>
        )}
      </>
    </main>
  );
}
