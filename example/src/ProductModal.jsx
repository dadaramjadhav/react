import React from "react"
import "./ProductModal.css"
export default function ProductModal({ onClose }) {
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  }

  const modalStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    maxWidth: "90%",
  }
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2>Product Details</h2>

        <p>
          This modal is controlled by the URL query parameter:
          <code> ?modal=true</code>
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
