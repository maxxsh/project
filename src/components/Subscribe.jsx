import React, { useReducer, useState, useEffect } from "react";
export default function Subscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    if (isSubscribed) {
      alert("Thank you for subscribing!");
    }
  }, [isSubscribed]);
  return (
    <section className="bg-yellow pb-6 dark:bg-gray-900">
      <div className="gap-8 items-stretch py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
        <h2 className="text-center mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Sign Up For Our Newsletter
        </h2>
        <div className="mt-4 md:mt-0">
          <form
            method="get"
            action="/"
            onSubmit={(event) => {
              // event.preventDefault();
              setIsSubscribed(true);
            }}
            className="mt-4 md:mt-0 flex items-center justify-center"
          >
            <input
              type="email"
              name="email"
              required
              id="res-email"
              className="bg-gray-50 border max-w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
            <button
              type="submit"
              className="place-self-center col-span-2 min-w-[200px] inline-flex items-center justify-center px-5 py-1 text-2xl font-semibold text-center bg-yellow rounded-xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
