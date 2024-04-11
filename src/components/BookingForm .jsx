import { useState, useReducer } from "react";

const reduser = (state, action) => {
  if (action.type === "update_time") console.log(state[0]);
  return state.filter((item) => item !== action.reservedTime);
};

export default function BookingForm({ availableTimes, setAvailableTimes }) {
  const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  console.log(data, time, guests);

  const initializeTimes = [...availableTimes];

  const [aavailableTimes, dispatch] = useReducer(reduser, initializeTimes);

  console.log("aavailableTimes", aavailableTimes);

  const onTimeChange = (e) => {
    setTime(e.target.value);
    dispatch({ type: "update_time", reservedTime: e.target.value });
  };

  return (
    <form className="grid gap-4 mb-4 sm:grid-cols-2 justify-items-start">
      <label
        htmlFor="res-date"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Choose date
      </label>
      <input
        type="date"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        id="res-date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <label
        htmlFor="res-time"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Choose time
      </label>
      <select
        value={time}
        onChange={onTimeChange}
        id="res-time"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label
        htmlFor="guests"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Number of guests
      </label>
      <input
        type="number"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <label
        htmlFor="occasion"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Occasion
      </label>
      <select
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        id="occasion"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      />
    </form>
  );
}
