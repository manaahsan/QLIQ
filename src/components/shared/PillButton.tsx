import React from "react";

interface PillButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PillButton: React.FC<PillButtonProps> = ({ active, children, onClick, className = ""  }) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`
      px-8 py-3 rounded-full text-sm font-medium border flex-1 text-center transition
      ${active ? "bg-blue-500 text-white border-blue-500" : "bg-transparent text-black border-blue-500"}
      ${className}
    `}
  >
    {children}
  </button>
);

export default PillButton;
