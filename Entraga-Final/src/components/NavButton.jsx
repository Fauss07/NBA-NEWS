// src/components/NavButton.jsx
export default function NavButton({ label, isActive, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${isActive ? "active" : ""}`}
    >
      {label}
    </button>
  );
}