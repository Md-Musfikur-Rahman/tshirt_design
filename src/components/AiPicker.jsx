import React from "react";
import CustomButton from "./CustomButton";
import HashLoader from "react-spinners/HashLoader";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        rows="5"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
        placeholder="Give a details instraction for design or logo"
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <>
            <CustomButton
              title="Generating"
              type="outline"
              customStyles="text-xs"
            />
            <HashLoader color="#36d7b7" speedMultiplier={0.5} />{" "}
          </>
        ) : (
          <>
            <CustomButton
              type="outline"
              title="Get logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="Get Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
