import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div
        className={`${
          showNav ? "h-32 border-[16px]" : "h-0"
        } overflow-hidden flex justify-evenly bg-white items-center  border-black transition-all`}
      >
        <HomeButton />
        <p>I'm a nav</p>
        <p>Third thing</p>
      </div>
      <ShowButton currentState={showNav} updateShow={setShowNav} />
    </>
  );
};

type ShowButtonProps = {
  currentState: boolean;
  updateShow: Dispatch<SetStateAction<boolean>>;
};

const ShowButton = ({ currentState, updateShow }: ShowButtonProps) => {
  const svgClasses = "w-16 h-16";

  return (
    <span
      onClick={() => updateShow(!currentState)}
      className="cursor-pointer w-min inline-block"
    >
      {currentState ? (
        <UpArrow className={svgClasses} />
      ) : (
        <DownArrow className={svgClasses} />
      )}
    </span>
  );
};

const UpArrow = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_21_"
        d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
	c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15
	V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
      />
    </svg>
  );
};

const DownArrow = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_24_"
        d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15
	c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5
	C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
      />
    </svg>
  );
};

const HomeButton = () => {
  return (
    <Link href="/">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 448.512 448.512"
        xmlSpace="preserve"
        className="border-black border-2 rounded-full p-2 w-12 h-auto fill-black hover:fill-lapizlazuli hover:border-lapizlazuli"
      >
        <g>
          <path
            d="M444.277,215.253L242.72,52.441l-11.186-9.289c-4.22-3.506-10.34-3.506-14.559,0l-58.162,48.301V71.031
		c0-6.294-5.104-11.397-11.396-11.397h-43.449c-6.293,0-11.396,5.104-11.396,11.397v75.233L4.191,218.371
		c-4.875,3.979-5.605,11.157-1.625,16.035c2.254,2.764,5.531,4.193,8.836,4.193c2.533,0,5.082-0.841,7.203-2.565l34.477-28.126
		v188.684c0,6.294,5.102,11.397,11.396,11.397h121.789c6.295,0,11.398-5.104,11.398-11.397v-88.426h53.18v88.426
		c0,6.294,5.104,11.397,11.398,11.397h121.789c6.295,0,11.397-5.104,11.397-11.397V205.101l34.521,27.884
		c2.108,1.702,4.643,2.532,7.158,2.532c3.321,0,6.622-1.447,8.87-4.235C449.937,226.384,449.173,219.208,444.277,215.253z
		 M115.366,82.428h20.652v27.164l-20.652,16.716V82.428z M372.636,189.958v195.235h-98.994v-88.427
		c0-6.294-5.104-11.396-11.397-11.396h-75.977c-6.295,0-11.396,5.104-11.396,11.396v88.427H75.877V189.958l44.309-36.798
		c0,0,103.748-85.009,104.41-86.141L372.636,189.958z"
          />
        </g>
      </svg>
    </Link>
  );
};

export default Nav;
