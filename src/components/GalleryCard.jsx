export default function Card({
  title,
  price,
  description,
  imageSrc,
  inCart,
  setInCart,
}) {
  const clickHandler = (a) => {
    alert(
      "Item added to the cart. " +
        a +
        ". You can check you cart by clicking 'View Cart' button"
    );
    setInCart([...inCart, a]);
  };
  return (
    <div className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageSrc} alt={title} />
      </a>
      <div className="flex flex-col flex-1 justify-between items-center p-5">
        <div className="w-full inline-flex justify-between text-gray-900 dark:text-white">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </a>
          <span>${price}</span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          onClick={() => clickHandler(title)}
          className="inline-flex items-center border-2 border-yellow px-3 py-2 text-sm text-gray-900 font-medium text-center dark:text-white hover:bg-yellow  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Add to Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pl-2 -mb-1"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
