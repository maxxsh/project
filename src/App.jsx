import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import { fetchAPI } from "./utils/fakeAPI";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { FormProvider } from "./context/formContext";

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
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    getInitialTimes()
  );
  const [isDark, setIsDark] = useState(false);

  // Function to update times
  const updateTimes = (selectedTime) => {
    fetchAPI(new Date(2024, 0, 15))
      .then((jsonData) => dispatch({ type: "UPDATE_TIMES", payload: jsonData }))
      .catch((error) => console.log(error));
  };

  return (
    <div className={isDark ? "dark" : null}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <FormProvider>
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
            <Route
              path="/confirmation"
              element={
                <ConfirmedBooking
                  availableTimes={availableTimes}
                  updateTimes={updateTimes}
                />
              }
            />
          </Routes>
        </FormProvider>
      </main>
      <Footer />
    </div>
  );
}
