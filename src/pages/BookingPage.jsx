import BookingForm from "../components/BookingForm";

export default function BookingPage({ availableTimes, updateTimes }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Book Now
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            🌟 Book Your Culinary Journey Today! 🌟 Reserve your table now and
            embark on a gastronomic adventure that will tantalize your taste
            buds and leave you craving more. We can't wait to welcome you to an
            extraordinary dining experience!
          </p>
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <br />
                Fill Out the Form and Choose Your Date & Time!
              </h3>
            </div>

            <BookingForm
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
