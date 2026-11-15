"use client";
import { ToastType } from "@/app/_lib/stores";
import { CircleCheck, CircleExclamationPoint, Info, X } from "lucide-react";
import { useEffect } from "react";

// Toast component
export default function Toast({
  message,
  duration,
  type,
  onClose,
}: {
  message: string;
  duration: number;
  type: ToastType;
  onClose: () => void;
}) {
  // Set up a timer to automatically close the toast after the specified duration
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  // Toast styles
  let bg = "bg-gray-50";
  let border = "border border-gray-200";
  let icon = <Info size={24} strokeWidth={1.5} className="mr-2" />;
  let text = "text-gray-800";
  switch (type) {
    case ToastType.SUCCESS:
      bg = "bg-green-50";
      icon = <CircleCheck size={24} strokeWidth={1.5} className="mr-2" />;
      border = "border border-green-200";
      text = "text-green-900";
      break;
    case ToastType.ERROR:
      bg = "bg-red-50";
      icon = (
        <CircleExclamationPoint size={24} strokeWidth={1.5} className="mr-2" />
      );
      border = "border border-red-200";
      text = "text-red-800";
      break;
  }
  return (
    <div
      className={
        "flex items-center justify-between p-3 rounded-xl font-medium shadow-lg " +
        bg +
        " " +
        border +
        " " +
        text
      }
    >
      <div className="flex items-center">
        {icon}
        {message}
      </div>
      <X
        size={24}
        strokeWidth={1.5}
        className="ml-4 cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}
