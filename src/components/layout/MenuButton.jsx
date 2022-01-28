/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="menu-btn"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen ? <FiX /> : <FiMenu />}
    </div>
  );
}
