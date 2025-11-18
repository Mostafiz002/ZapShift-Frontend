import React from "react";

const ErrorMessage = ({message}) => {
  return (
    <div className="badge badge-error">
      <svg
        className="size-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></circle>
          <path
            d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></path>
          <circle
            cx="12"
            cy="7.25"
            r="1.25"
            fill="currentColor"
            strokeWidth="2"
          ></circle>
        </g>
      </svg>
      {message}
    </div>
  );
};

export default ErrorMessage;
