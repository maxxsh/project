export default function Chicago() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-stretch py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Little Lemon
          </h2>
          <h3 className="mb-2 text-3xl text-gray-900 dark:text-white">
            Chicago
          </h3>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            From the freshest ingredients to the most exquisite flavors, indulge
            in a culinary journey like no other. Our menu is meticulously
            crafted to cater to the most discerning palates.
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Immerse yourself in the cozy ambiance of Little Lemon. Whether it's
            a romantic dinner for two or a lively gathering with friends, our
            restaurant provides the perfect setting for every occasion.
          </p>{" "}
        </div>{" "}
        <div className="relative">
          <img
            className="-bottom-4 absolute w-[50%]"
            src={require("../assets/img/lemon-dessert.jpg")}
            alt="dashboard image"
          />
          <img
            className="-top-4 right-0 absolute w-[70%] "
            src={require("../assets/img/restaurant-chef-B.jpg")}
            alt="dashboard image"
          />
        </div>
      </div>
    </section>
  );
}
