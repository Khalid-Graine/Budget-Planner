import React from "react";
import { MdError } from "react-icons/md";

const MessageError = ({ error }) => {
  return (
    <div>
      {error && (
        <div className="text-red-500 flex justify-start items-center gap-2 font-semibold bg-red-100 py-2 rounded-sm px-2">
          <MdError className="text-3xl" />
          <p> {error}</p>
        </div>
      )}
    </div>
  );
};

export default MessageError;
