// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function NavButton({ label, isActive, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08, boxShadow: "0 0 12px #ffa500" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${className} ${isActive ? "active" : ""}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {isActive && (
        <motion.div
          layoutId="nav-active-bg"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 8,
            background: "linear-gradient(90deg, #232323 60%, #ffb34733 100%)",
            zIndex: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
      <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
    </motion.button>
  );
}