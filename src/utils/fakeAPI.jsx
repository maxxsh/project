const seededRandom = () => {
  let timeArray = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "24:00",
  ];
  let resultSet = new Set();
  let numberOfTimes = Math.floor(Math.random() * 14) + 2; // Generate a random number between 2 and 15

  while (resultSet.size < numberOfTimes) {
    let randomIndex = Math.floor(Math.random() * timeArray.length); // Generate a random index within the timeArray
    resultSet.add(timeArray[randomIndex]); // Add the time at the random index to the resultSet
  }

  // Convert the Set to an array and sort it in ascending order
  let resultArray = Array.from(resultSet).sort((a, b) => a.localeCompare(b));

  return resultArray;
};

export const fetchAPI = async (date) => {
  try {
    let result = seededRandom(date.getDate());
    return result;
  } catch (error) {
    console.error("Failed to fetch data (make sure local is launched):", error);
  }
};

export const submitAPI = async (formData) => true;
