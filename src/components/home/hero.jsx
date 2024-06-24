// components/Hero.js
import Link from "next/link";
import Image from "next/image";
import HeroWine from "@/assets/images/hero_wine.png";

const Hero = () => {
  return (
    <section className="bg-hero-background  text-white h-screen flex px-24 items-center">
      <div className="w-full flex gap-4">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Premium Wines
          </h1>
          <p className="text-lg mb-8">
            Explore our curated selection of exquisite wines from around the
            world.
          </p>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 flex justify-center items-center">
            <Link href="#">
              <p className="text-purple-900 text-lg font-semibold">Shop Now</p>
            </Link>
          </div>
        </div>
        {/* hero image */}
        <div className="mx-10">
          <Image src={HeroWine} className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
