"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team was an exceptional experience. They transformed our vision into a stunning and functional website that perfectly represents our brand.",
    name: "Ngozi Okafor",
    title: "CEO, Tech Innovators Ltd.",
  },
  {
    quote:
      "Their professionalism and attention to detail are unmatched. The app they developed for us not only met but exceeded our expectations.",
    name: "Tunde Adesanya",
    title: "Founder, Green Solutions Inc.",
  },
  {
    quote: "They delivered a user-friendly and aesthetically pleasing website on time and within budget. Highly recommended!",
    name: "Amaka Nwosu",
    title: "Marketing Director, Creative Ventures",
  },
  {
    quote:
      "Their team is skilled and knowledgeable. They provided valuable insights and suggestions throughout the development process, resulting in a top-notch product.",
    name: "Chidi Eze",
    title: "Product Manager, Digital Horizons",
  },
  {
    quote:
      "From start to finish, their professionalism and commitment to quality were evident. Our app is now a vital tool for our business, thanks to their expertise.",
    name: "Folake Ogunleye",
    title: "COO, Bright Future Enterprises",
  },
];
