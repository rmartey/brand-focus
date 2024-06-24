// pages/404.js
import Link from "next/link";
import { FaWineGlass } from "react-icons/fa"; // Import wine glass icon from an icon library

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-wine-red text-white">
      <FaWineGlass className="text-6xl mb-4" />
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Looks like this page is corked.</p>
      <Link href="/">
        <p className="bg-wine-light hover:bg-wine-dark text-white py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Take me back to the vineyard
        </p>
      </Link>
    </div>
  );
};

export default Custom404;
