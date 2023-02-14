import Link from "next/link";
import { useEffect, useState } from "react";

const Redirections = [
  { name: "Full Stack Developer", path: "/fsdev" },
  { name: "Skateboarder", path: "/skater" },
  { name: "Rock Climber", path: "/rockclimber" },
  {
    name: "Neovim Enthusiast",
    path: "https://github.com/danielvolchek/dotfiles",
  },
  { name: "Ramen Lover", path: "/ramen" },
];

// time in ms to rotate carousel
const MovementTime = 1500;

type Props = {};

const VerticalCarousel = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(MovementTime);

  const setIndexFromDot = (index: number) => {
    // add delay of 1 second after pressing a button
    const DELAY = 1000;
    setCurrentIndex(index);
    setRemainingTime(MovementTime + DELAY);
  };

  useEffect(() => {
    const TICK = 10;

    const timeout = setTimeout(() => {
      setRemainingTime((remainingTime) => remainingTime - TICK);
      if (remainingTime <= 0) {
        setCurrentIndex(
          (currentIndex) => (currentIndex + 1) % Redirections.length
        );
        setRemainingTime(MovementTime);
      }
    }, TICK);

    return () => {
      clearTimeout(timeout);
    };
  }, [remainingTime]);

  return (
    <div className="flex items-center">
      <div className="flex flex-col self-start">
        <h3 className="text-6xl">I'm a...</h3>
        <Link
          className={`text-8xl ${
            currentIndex % 2 === 0 ? "text-thulianpink" : "text-hunyadiyellow"
          } hover:underline mr-8 
pl-4
          `}
          href={Redirections[currentIndex].path}
        >
          {Redirections[currentIndex].name}
        </Link>
        <DotContainer
          currentIndex={currentIndex}
          setCurrentIndex={setIndexFromDot}
        />
      </div>
    </div>
  );
};

type DotContainerProps = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};
const DotContainer = ({ currentIndex, setCurrentIndex }: DotContainerProps) => {
  return (
    <div className="flex gap-2">
      {Redirections.map((_, index) => {
        return (
          <Dot
            currentIndex={currentIndex}
            dotIndex={index}
            key={index}
            setCurrentIndex={setCurrentIndex}
          />
        );
      })}
    </div>
  );
};

const Dot = ({
  currentIndex,
  dotIndex,
  setCurrentIndex,
}: {
  currentIndex: number;
  dotIndex: number;
  setCurrentIndex: (index: number) => void;
}) => {
  const pressedDot = () => {
    setCurrentIndex(dotIndex);
  };

  return (
    <div
      className={`rounded-full w-8 h-8 ${
        currentIndex === dotIndex
          ? "bg-lapizlazuli"
          : "bg-none hover:bg-teal-100"
      } border-solid border-4 border-black my-4 cursor-pointer `}
      onClick={pressedDot}
    ></div>
  );
};

export default VerticalCarousel;

// import React, { useState, useEffect } from "react";
//
// const Redirections = [
//   { name: "Full Stack Dev", path: "/portfolio" },
//   { name: "Skater", path: "/skater" },
//   { name: "Rock Climber", path: "/rockclimber" },
//   { name: "Ramen Lover", path: "/ramen" },
// ];
//
// const Carousel = () => {
//   const [index, setIndex] = useState(0);
//
// };
//
// export default Carousel;
