import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";

// Define reducer function to manage state changes
function availableTimesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
}
const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function getInitialTimes() {
  return initializeTimes;
}

export { getInitialTimes };

export default function App() {
  // Define initial state function

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    getInitialTimes()
  );

  console.log(availableTimes);
  // Function to update times
  const updateTimes = (selectedTime) => {
    // Remove the selected time from the available times
    const updatedTimes = availableTimes.filter((time) => time !== selectedTime);
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
  };
  // Export updateTimes function only in testing environment

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
                updateTimes={updateTimes}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
