import React from "react";
import { ChevronRightIcon } from "lucide-react";

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  trailing?: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, trailing }) => (
  <div className="flex items-center justify-between bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-3">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 text-gray-600">{icon}</div>
      <div className="font-medium">{label}</div>
    </div>
    {trailing || <ChevronRightIcon className="w-5 h-5 text-gray-400" />}
  </div>
);

export default InfoRow;
