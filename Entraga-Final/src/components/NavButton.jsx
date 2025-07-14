// src/components/NavButton.jsx
export default function NavButton({ label, isActive, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          background: "none",
          border: "none",
          color: isActive ? "#61dafb" : "white",
          cursor: "pointer"
        }}
      >
        {label}
      </button>
    );
  }
  