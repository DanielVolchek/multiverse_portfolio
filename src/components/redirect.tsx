import Link from "next/link";

export const Redirections = [
  { name: "Human Person", path: "/aboutme" },
  { name: "Full Stack Developer", path: "/portfolio" },
  { name: "Skateboarder", path: "/skater" },
  {
    name: "Neovim Enthusiast",
    path: "https://github.com/danielvolchek/dotfiles",
  },
  { name: "Rock Climber", path: "/rockclimber" },
  { name: "Instant Ramen Lover", path: "/ramen" },
];

export default function Redirects() {
  return (
    <div className="flex flex-col mt-16">
      <h3 className="text-xl text-charcoal">
        While you're here, why not take a look around?
      </h3>
      <h3 className="text-6xl">I'm a...</h3>
      {Redirections.map((redirection, index) => (
        <Link href={redirection.path} className="inline-block w-max">
          <span
            className={`text-8xl pl-8 ${
              index % 2 === 0 ? "text-hunyadiyellow" : "text-thulianpink ml-24 "
            } animated_underline w-full`}
          >
            {redirection.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
