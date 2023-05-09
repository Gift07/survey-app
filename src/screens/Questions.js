import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [question_type, setQuestionType] = useState("Single Choice");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    survey_name: "",
    survey_description: "",
  });
  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };
  return (
    <div className="w-full h-calc-vh">
      <div className="w-full h-[80%] flex  pr-16">
        <div className="flex-1 pl-8 h-full">
          <div className="w-full flex items-center justify-between pt-6">
            <div>
              <h1>Question 1</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>Required</div>
              <div>
                <select
                  onChange={(e) => handleChange(e)}
                  className="p-2 text-sm font-semibold border outline-none border-yellow-400 rounded-md"
                >
                  <option value={"single_choice"}>Single choice</option>
                  <option value={"multiple_choice"}>Multiple choice</option>
                  <option value={"short_answer"}>Short Answer</option>
                  <option value={"long_answer"}>Long Answer</option>
                  <option>Rate</option>
                </select>
              </div>
            </div>
          </div>
          {/* questions */}
          <div className="pt-2 w-full">
            <div className="w-full">
              <input className="outline-none w-full border-b border-yellow-500 bg-gray-100 py-2 px-1 font-bold" />
            </div>
            {/* answers */}
            <div className="w-full flex items-center justify-center pt-3">
              <div className="w-full grid grid-cols-2 items-start gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <label className="font-semibold text-gray-400 text-sm ">
                      option 1
                    </label>
                    <div className="flex items-center gap-x-2">
                      <input className="outline-none border border-yellow-400 p-1 text-sm" />
                      <img
                        src="images/close_inactive.png"
                        alt="close"
                        className="h-4 w-4 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-60 bg-gray-100 relative flex justify-center">
          <div className="w-[90%] h-[96%]  absolute bottom-0">
            <div className="w-full h-full  bg-white px-3">
              <div className="py-3">
                <hi className="font-bold text-sm">Question List</hi>
              </div>
              <hr />
              <div>
                {!localStorage.getItem("questions") ? (
                  <div>
                    <img
                      src="images/girl_clock.png"
                      alt="girl"
                      className="h-12 w-12 object-cover"
                    />
                    <div>
                      <h1>Questions that you ask will appear here</h1>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-4 pl-8 pr-16">
        <div>
          {formData.survey_description === "" && formData.survey_name === "" ? (
            <button className="flex items-center gap-x-2 uppercase font-light px-2 py-1 rounded-md bg-gray-200  whitespace-nowrap">
              + Add new question
            </button>
          ) : (
            formData.survey_description !== "" &&
            formData.survey_name !== "" && (
              <button
                onClick={() => navigate("question")}
                className="flex items-center gap-x-2 uppercase font-light px-2 py-1 rounded-md bg-blue text-white  whitespace-nowrap"
              >
                + Add new question
              </button>
            )
          )}
        </div>
        <div>
          <button className="flex items-center gap-x-2 uppercase font-light px-2 py-1 rounded-md bg-blue text-white  whitespace-nowrap">
            Share survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
