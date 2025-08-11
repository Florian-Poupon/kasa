import React, { useRef, useState } from "react";

export default function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="dropdown">
      <button className="dropdown__toggle">
        {title}
        <span className={`dropdown__arrow${open ? " open" : ""}`} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <img src="/src/assets/images/icons/arrow_down.svg" alt="arrow" />
        </span>
      </button>
      <div
        className="dropdown__content"
        ref={contentRef}
        style={{
          maxHeight: open ? (contentRef.current ? contentRef.current.scrollHeight + "px" : "300px") : "0px",
        }}
        aria-hidden={!open}
      >
        <div className="dropdown__inner">{children}</div>
      </div>
    </div>
  );
}
