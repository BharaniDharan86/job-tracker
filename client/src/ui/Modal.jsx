/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Button } from "./Button";

const ModalContext = createContext();

export const Modal = ({ children }) => {
  const [openName, setOpenName] = useState(null);

  const close = () => setOpenName(null);
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

function Open({ children, name }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(name),
  });
}
function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);

  if (openName !== name) return null;

  return (
    <div className="fixed top-0 left-0 h-screen w-full z-[200]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 w-60% h-40vh">
        <div className="flex justify-end">
          <Button type="small" rounded="full" onClick={close}>
            <HiMiniXMark />
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
