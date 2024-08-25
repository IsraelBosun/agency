"use client";

import Image from "next/image";

const samples = [
  {
    image: "https://drive.google.com/uc?export=view&id=1vIv944q9ZfdsrftWwx5Piodt0Rfu954V",
    details: "Crafted a powerful data analytics platform for business insights.",
  },
  {
    image: "/images/gyming.png",
    details: "Developed a dynamic gym platform to elevate fitness experiences.",
  },
  {
    image: "/images/econs.png",
    details: "Built an interactive online platform for Economics education.",
  },
  {
    image: "/images/estate.png",
    details: "Designed a seamless property marketplace for home buyers.",
  },
];


const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl 
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Web Apps <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          We craft stunning websites designed to drive results. Here are some of our recent projects:
        </p>

        <div className="md:flex items-center justify-center  px-10 ">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={sample.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  {sample.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
