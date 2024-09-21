import GalleryCard from "./GalleryCard";

export default function GalleryFeed() {
  const meals = [
    {
      title: "Greek Salad",
      price: 12.99,
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("../assets/img/greek-salad.jpg"),
    },
    {
      title: "Bruchetta",
      price: 5.99,
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => require("../assets/img/image-pr-9.jpg"),
    },
    {
      title: "Lemeon desert",
      price: 5.0,
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => require("../assets/img/image-pr.jpg"),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 pt-[100px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="w-full md:flex md:flex-row-reverse justify-between mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            This weeks specials!
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-2xl font-semibold text-center bg-yellow rounded-2xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            View Cart
          </a>
        </div>
        <div className="space-y-8 grid  justify-center lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {Array.from({ length: 4 }).map((_, index) =>
            meals.map((meal) => (
              <GalleryCard
                key={meal.title}
                price={meal.price}
                title={meal.title}
                description={meal.description}
                url="https://github.com/rgommezz/react-native-offline"
                imageSrc={meal.getImageSrc()}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
