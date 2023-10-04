import { Modal } from "@mui/material";
import React from "react";

interface DeletePopUpProps {
  message: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deletefunction: () => void;
}
const DeletePopUp = ({
  message,
  open,
  setOpen,
  deletefunction,
}: DeletePopUpProps) => {
  return (
    <Modal open={open}>
      <div className="w-full flex h-screen font-nunito items-center justify-center">
        <div className=" h-[192px] bg-white  border flex  flex-col items-center rounded-[10px] py-3.5 px-[25px]">
          <img
            src="/icons/warning-icon.png"
            alt="warning-icon"
            width={48}
            height={48}
          />
          <h1 className="font-bold text-base ">Warning</h1>
          <p className="text-sm leading-6">
            Are you Sure that you want to delete this services?
          </p>
          <div className="w-full flex items-center font-bold mt-6 justify-between">
            <button
              onClick={() => setOpen(false)}
              className="px-2.5 py-1 rounded-[4px] border text-primary_text "
            >
              Cancle
            </button>{" "}
            <button
              onClick={() => {
                deletefunction();
              }}
              className="px-4 py-1 rounded-[4px] border text-white bg-primary "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePopUp;
