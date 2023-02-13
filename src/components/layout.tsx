import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children, className }: Props) => {
  return (
    <div className="bg-iceblue min-h-screen">
      <Nav />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8 }}
        className={`${className ?? ""} mx-16 `}
      >
        {children}
      </motion.main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
