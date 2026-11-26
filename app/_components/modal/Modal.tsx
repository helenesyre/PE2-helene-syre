import { ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  title,
  content,
  actions,
  modalState,
  toggleModal,
}: {
  title: string;
  content: string;
  actions: ReactNode;
  modalState: boolean;
  toggleModal: () => void;
}) {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };
  return (
    <div>
      {modalState && (
        <div
          onClick={handleClickOutside}
          className="fixed z-50 top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center"
        >
          <div className="max-w-lg bg-cloud-white-50 p-6 mt-12 mb-24 mx-6 shadow-lg rounded-md">
            <div className="flex justify-between">
              <h4 className="mb-4">{title}</h4>
              <X
                size={20}
                strokeWidth={1.5}
                onClick={toggleModal}
                className="cursor-pointer hover:text-red-900"
              />
            </div>
            <p className="mb-6 text-deep-forest-400">{content}</p>
            <div className="flex justify-end gap-4">{actions}</div>
          </div>
        </div>
      )}
    </div>
  );
}
