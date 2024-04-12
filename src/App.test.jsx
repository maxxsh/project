// Import necessary components
import App, { getInitialTimes, updateTimes } from "./App";

describe("App functions", () => {
  test("should return the initial list of available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(getInitialTimes()).toEqual(expectedTimes);
  });

  // test("should update availableTimes by removing the selected time", () => {
  //   const initialTimes = ["17:00", "18:00", "19:00"];
  //   const selectedTime = "18:00";
  //   const expectedTimes = ["17:00", "19:00"];

  //   const updatedTimes = updateTimes(selectedTime, App.dispatch, initialTimes);
  //   expect(updatedTimes).toEqual(expectedTimes);
  // });
});
