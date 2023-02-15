import Link from "next/link";
import { useEffect, useState } from "react";
import { Redirections } from "./redirect";

const MovementTime = 1500;

const LinkCarousel = () => {
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
    <div className="flex flex-col items-center w-[500px] min-w-max">
      <Link
        className={`text-3xl ${
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
      className={`rounded-full w-4 h-4 ${
        currentIndex === dotIndex
          ? "bg-lapizlazuli"
          : "bg-none hover:bg-teal-100"
      } border-solid border-4 border-black cursor-pointer `}
      onClick={pressedDot}
    ></div>
  );
};

export default LinkCarousel;
