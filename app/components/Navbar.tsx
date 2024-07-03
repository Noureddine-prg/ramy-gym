import ButtonVariationA from "./Buttons";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex items-center justify-between sticky top-0 z-50 w-full">
      <div className="flex justify-center items-center h-20 bg-white px-4">
        <div className="text-gray-900 font-bold text-2xl">Logo</div>
      </div>
      <ul className="flex list-none m-0 p-0 items-center">
        <li className="mx-5">
          <a
            href="#"
            className="text-white no-underline font-bold text-lg hover:underline"
          >
            About
          </a>
        </li>
        <li className="mx-5">
          <a
            href="/About"
            className="text-white no-underline font-bold text-lg hover:underline"
          >
            Services
          </a>
        </li>
        <li className="mx-5 ">
          <a
            href="#"
            className="text-white no-underline font-bold text-lg hover:underline"
          >
            Schedule
          </a>
        </li>

        <li>
          <ButtonVariationA>Book Session</ButtonVariationA>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
