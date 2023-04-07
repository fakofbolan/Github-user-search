import React, { useRef } from "react";
import "./FormState.scss";

export const FormState = (props) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inptValue = inputRef.current.value;
    props.submitForm(inptValue);

    inputRef.current.value = "";
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Github user..."
        ref={inputRef}
        className="form-input"
      />
      <button type="submit" className="form-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.72 56.26" className="svg_send">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="svg_send_path"
                d="M45.6,27.82Q35.81,26.76,26,25.71c-3.72-.4-7.47-.63-11.17-1.22a4.76,4.76,0,0,1-3-2C8,15.94,4.37,9.3.74,2.66A9.93,9.93,0,0,1,.14,0,11.21,11.21,0,0,1,2.69.36Q23.45,8.59,44.18,16.9c8.19,3.27,16.39,6.51,24.56,9.82a9.36,9.36,0,0,1,2,1.57,9.59,9.59,0,0,1-1.93,1.37Q35.67,42.92,2.51,56.08A8,8,0,0,1,0,56.25,9.65,9.65,0,0,1,.58,54c3.6-6.57,7.31-13.08,10.85-19.68a4.55,4.55,0,0,1,4.08-2.6c9.7-.92,19.38-2,29.07-3a6.66,6.66,0,0,0,1.06-.29Z"
              />
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};
