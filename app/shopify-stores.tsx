"use client";

import Image from "next/image";
import Link from "next/link";

const samples = [
  {
    image: "/images/gyming.png",
    details: "Developed a dynamic gym platform to elevate fitness experiences.",
    link: "https://gyming.vercel.app/",
  },
  {
    image: "/images/econs.png",
    details: "Built an interactive online platform for Economics education.",
    link: "https://school-website-sigma.vercel.app/",
  },
  {
    image: "/images/estate.png",
    details: "Designed a seamless property marketplace for home buyers.",
    link: "https://real-estate-app-alpha-two.vercel.app/",
  },
  {
    image: "/images/fact.jpg",
    details: "Nigerian Facts App: Uncover fascinating insights about Nigeria. Click to download on Playstore",
    link: "https://play.google.com/store/apps/details?id=com.israelbosun.factos",
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Web Apps <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          We craft stunning websites designed to drive results. Here are some of our recent projects:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 px-10 rounded-xl">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-1/3 w-full rounded-xl m-4"
            >
              <Link
                href={sample.link}
                rel="noreferrer"
                target="_blank"
                className="flex flex-col rounded-lg items-center justify-center cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={sample.image}
                  alt="Project Image"
                  width={400}
                  height={400}
                  className="rounded-lg  mx-auto p-2"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                  {sample.details}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
