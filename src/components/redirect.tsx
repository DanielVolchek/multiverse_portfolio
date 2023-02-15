import Link from "next/link";

export const Redirections = [
  { name: "Human Person", path: "/aboutme" },
  { name: "Full Stack Developer", path: "/portfolio" },
  { name: "Rock Climber", path: "/rockclimber" },
  {
    name: "Neovim Enthusiast",
    path: "https://github.com/danielvolchek/dotfiles",
  },
  { name: "Instant Ramen Lover", path: "/ramen" },
];

export default function Redirects() {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-xl text-charcoal">
        While you&apos;re here, why not take a look around?
      </h3>
      <h3 className="text-4xl lg:text-5xl">I&apos;m a...</h3>
      {Redirections.map((redirection, index) => (
        <Link
          key={index}
          href={redirection.path}
          className="inline-block w-max"
        >
          <span
            className={`text-4xl md:text-6xl lg:text-8xl sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8 ${
              index % 2 === 0
                ? "text-hunyadiyellow"
                : "text-thulianpink ml-6 sm:ml-12 lg:ml-18 xl:ml-24 "
            } animated_underline w-full`}
          >
            {redirection.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
