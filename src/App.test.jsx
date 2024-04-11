import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("initializeTimes returns the correct expected value", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const initializedTimes = App().initializeTimes();
    expect(initializedTimes).toEqual(expectedTimes);
  });

  test("updateTimes returns the same value provided in the state", () => {
    const selectedTime = "19:00";
    const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const updatedTimes = App().updateTimes(selectedTime, currentState);
    expect(updatedTimes).toEqual(currentState);
  });
});
