import { motion } from "framer-motion";
import Header from "./nav";
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
    <div className="bg-[#ffffed] min-h-screen overflow-x-hidden">
      <Header />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`${
          className ?? ""
        } mt-4 mx-4 lg:mx-32 min-h-[85vh] flex flex-col justify-center`}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
