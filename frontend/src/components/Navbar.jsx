import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex flex-col sm:flex-row justify-between items-center gap-3">
        <Link
          to="/"
          className="text-[22px] sm:text-[28px] font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          NovaStore 🛒
        </Link>

        <div className="flex gap-2">
          <Link to="/create">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="p-2 rounded bg-slate-700 hover:bg-slate-600"
            >
              <FiPlusSquare size={20} />
            </motion.button>
          </Link>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded bg-slate-700 hover:bg-slate-600"
          >
            {theme === "light" ? <IoMoon /> : <LuSun size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
