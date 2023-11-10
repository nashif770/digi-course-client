import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center h-screen bg-white items-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />
      <h1 style={{ fontSize: "2rem" }}>404 Error: Page Not Found</h1>
    </div>
  );
};

export default Error;
