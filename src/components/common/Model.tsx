import type { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  heading?: string;
}
function Model({
  visible,
  onClose,
  children,
  className = "",
  heading,
}: ModalProps) {
  if (!visible) return null;
  return (
    <>
      <div
        className={`modal-overlay c-bg-white c-z1000 c-pad ${className}`}
        onClick={onClose}
      >
        <div className={`modal-box`} onClick={(e) => e.stopPropagation()}>
          <div className="modelHeading c-v-center c-x-between">
            <span className="modelHeadContent">{heading}</span>
            <button onClick={onClose} className="c-cur">
              <IoMdClose className="cs-fs-mid c-bold-l" />
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}

export default Model;
