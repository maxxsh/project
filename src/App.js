import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
export default function App() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  function updateAvailableTimes() {
    setAvailableTimes((prevState) => {
      return { ...prevState, place: "World-Wide Web" };
    });
  }
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/reservations"
            element={
              <BookingPage
                availableTimes={availableTimes}
                updateAvailableTimes={updateAvailableTimes}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
