import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/home/hero";
import Arrivals from "@/components/home/arrivals";
import ProductsSection from "@/components/home/productsSection";
import AboutUs from "@/components/home/aboutUs";
import ContactUs from "@/components/home/contactUs";
import Testimonials from "@/components/home/testimonials";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Hero /> */}
      <Arrivals />
      <ProductsSection />
      <Testimonials />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
