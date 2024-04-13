import { useEffect, useState } from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { submitAPI } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/formContext";

export default function BookingForm({ availableTimes, updateTimes }) {
  const { formData, updateFormData } = useFormContext();

  const [response, setResponse] = useState(false);

  const todayDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  const onDateChange = (e) => {
    const selectedDate = e.target.value;
    // Call updateTimes to update available times
    updateTimes(selectedDate);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: todayDate,
      time: availableTimes[0],
      guests: 1,
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      updateFormData(values);
      submitAPI(values)
        .then((response) => {
          setResponse(response);
        })
        .catch((error) => console.log(error));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      formik.resetForm();
      navigate("/confirmation");
    }
  }, [response]);

  return (
    <form
      className="grid gap-4 mb-4 sm:grid-cols-2 justify-items-start"
      onSubmit={formik.handleSubmit}
    >
      <label
        htmlFor="res-name"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your name
        {formik.touched.name && formik.errors.name ? (
          <span className="text-[#bf3535]"> {formik.errors.name}</span>
        ) : null}
      </label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        id="res-name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />

      <label
        htmlFor="res-email"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
        {formik.touched.email && formik.errors.email ? (
          <span className="text-[#bf3535]"> {formik.errors.email}</span>
        ) : null}
      </label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        id="res-email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />

      <label
        htmlFor="res-date"
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Choose date
      </label>
      <input
        type="date"
        min={todayDate}
        value={formik.values.date}
        onChange={(e) => {
          formik.handleChange(e);
          onDateChange(e); // Call onDateChange function
        }}
        name="date"
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
        value={formik.values.time}
        onChange={formik.handleChange}
        name="time"
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
        value={formik.values.guests}
        onChange={formik.handleChange}
        name="guests"
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
        value={formik.values.occasion}
        onChange={formik.handleChange}
        name="occasion"
        id="occasion"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        type="submit"
        className="inline-flex items-center justify-center px-5 py-3 text-2xl font-semibold text-center bg-yellow rounded-2xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
      >
        Make Your reservation
      </button>
    </form>
  );
}
