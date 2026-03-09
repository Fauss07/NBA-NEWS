export default function Modal({ abierto, onClose, children }) {
  if (!abierto) return null;
  return (
    <div className="modal-form" onClick={onClose}>
      <div className="modal-contenido-form" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}