import Card from "./Card";

export default function Menu() {
  const meals = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("../assets/img/greek-salad.jpg"),
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => require("../assets/img/greek-salad.jpg"),
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => require("../assets/img/greek-salad.jpg"),
    },
  ];

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="w-full md:flex justify-between mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            This weeks specials!
          </h2>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center bg-yellow rounded-2xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            Online Menu
          </a>
        </div>
        <div class="space-y-8 grid  justify-center lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {meals.map((meal) => (
            <Card
              key={meal.title}
              title={meal.title}
              description={meal.description}
              url="https://github.com/rgommezz/react-native-offline"
              imageSrc={meal.getImageSrc()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
