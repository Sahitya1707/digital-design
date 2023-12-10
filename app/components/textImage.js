import React from "react";

const TextImage = (props) => {
  return (
    <>
      <div
        className={`flex mb-8 animated fadeIn justify-center`}
        style={{ flexDirection: `${props.flexDirection}` }}
      >
        <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
          <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
            {props.heading}
          </p>

          <p className="mt-5 text-lg text-gray-700 text md:text-left">
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextImage;
