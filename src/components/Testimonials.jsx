import ReviewCard from "./ReviewCard";

export default function Testimonials() {
  const meals = [
    {
      title: "Kent Newman",
      description:
        "To end the meal, I indulged in a decadent slice of baklava and a strong cup of Turkish coffee. It was the perfect way to end a delicious and memorable dining experience.",
    },
    {
      title: "Veronica Steeves",
      description:
        "It's clear that this family owned restaurant puts their heart and soul into every aspect of their business, making it a gem in the community.",
    },
    {
      title: "Juan Ortiz",
      description:
        "I highly recommend Little Lemon to anyone looking for a taste of authentic Mediterranean cuisine.",
    },
    {
      title: "Billy Diaz",
      description:
        " The food, service, and ambiance all exceeded my expectations and I can't wait to go back and try more dishes. ",
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
