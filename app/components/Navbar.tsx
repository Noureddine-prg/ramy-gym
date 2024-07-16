import ButtonVariationA from "./Buttons";

const Navbar = () => {
  return (
    <nav className="py-4 px-10 flex items-center justify-between fixed top-0 z-50 w-full">
      <div className="flex justify-center items-center h-20 bg-white px-4">
        <div className="text-gray-900 font-bold text-2xl">Logo</div>
      </div>

      <ul className="flex list-none m-0 p-0 items-center">
        <li className="mx-5 text-white no-underline font-bold text-lg">
          <a href="#schedule">Schedule</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg ">
          <a href="#about">About</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg ">
          <a href="#programs">Programs</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg ">
          <a href="#trainer">Trainer</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
