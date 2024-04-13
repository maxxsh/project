import { useFormContext } from "../context/formContext";

export default function ConfirmedBooking() {
  const { formData } = useFormContext();
  console.log("formData", formData);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto text-center">
          <div className="bg-white dark:bg-gray-900">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Your booking has been confirmed!
            </h1>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-left text-gray-500 sm:text-lg dark:text-gray-400">
                <p className="mb-4">
                  Your journey to culinary delight has just begun! Your booking
                  at Little Lemon has been confirmed, and we're thrilled to have
                  you join us for an unforgettable dining experience.
                </p>
                <p className="mb-4">🌟 Your Reservation Details:</p>
                <p className="mb-4 font-lg">
                  <strong>- Name: {formData.name}</strong> <br />-{" "}
                  <strong>Email: {formData.email}</strong> <br />-{" "}
                  <strong>Date: {formData.date}</strong> <br />-{" "}
                  <strong>Time: {formData.time}</strong> <br />-{" "}
                  <strong>Number of Guests: {formData.date}</strong> <br />-{" "}
                  <strong>Occasion: {formData.occasion}</strong>,
                </p>
                <p className="mb-4">
                  Prepare your taste buds for a tantalizing adventure as our
                  master chefs craft delectable dishes just for you. From zesty
                  lemon-infused delights to savory sensations, get ready to
                  embark on a flavor-filled voyage that will leave you craving
                  more.
                </p>
                <p className="mb-4">
                  👨‍🍳 Our team is eagerly awaiting your arrival, ready to serve
                  you with warmth and hospitality. Sit back, relax, and indulge
                  in the essence of Little Lemon.
                </p>
                <p className="mb-4">
                  Thank you for choosing us to be a part of your culinary
                  journey. We can't wait to create unforgettable memories with
                  you.
                </p>
                <p className="mb-4">See you soon at Little Lemon! 🍽️🍋</p>
                <p>
                  We are strategists, designers and developers. Innovators and
                  problem solvers. Small enough to be simple and quick.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                  alt="office content 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
