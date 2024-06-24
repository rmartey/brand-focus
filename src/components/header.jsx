// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="text-xl font-bold">BrandFocus</p>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/products" className="cursor-pointer">
                <p>Shop</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
