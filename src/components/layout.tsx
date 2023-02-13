import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <div className="bg-iceblue min-h-screen">
      <Nav />
      <motion.main className={`${className ?? ""} mx-16 `}>
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
