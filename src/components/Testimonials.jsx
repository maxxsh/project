import ReviewCard from "./ReviewCard";

export default function Testimonials() {
  const meals = [
    {
      title: "Kent Newman",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    },
    {
      title: "Veronica Steeves",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    },
    {
      title: "Juan Ortiz",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    },
    {
      title: "Billy Diaz",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {meals.map((meal, index) => (
            <ReviewCard
              key={meal.title}
              price={meal.price}
              title={meal.title}
              description={meal.description}
              url="https://github.com/rgommezz/react-native-offline"
              imageSrc={require(`../assets/img/customer-${index + 1}).png`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
