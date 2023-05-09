import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SurveyName = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    survey_name: "",
    survey_description: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      {" "}
      <div className="pt-6 pl-8 pr-16">
        <div>
          <h1 className="text-lg font-bold">Survey Subject & Description</h1>
        </div>
        <div className="w-full">
          <form className="w-full py-3">
            <div className="py-2">
              <input
                name="survey_name"
                value={formData.survey_name}
                onChange={(e) => handleChange(e)}
                className="w-56 border border-yellow-500 p-2 outline-none"
                placeholder="Survey Name"
              />
            </div>
            <div className="py-2">
              <textarea
                name="survey_description"
                value={formData.survey_description}
                onChange={(e) => handleChange(e)}
                className=" border border-yellow-500 p-2 outline-none w-96"
                placeholder="Survey Name"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 py-4 pl-8">
        {formData.survey_description === "" && formData.survey_name === "" ? (
          <button className="flex items-center gap-x-2 uppercase font-light px-2 py-1 rounded-md bg-gray-200 w-40 justify-between ">
            Next
            <BsArrowRight />
          </button>
        ) : (
          formData.survey_description !== "" &&
          formData.survey_name !== "" && (
            <button
              onClick={() => navigate("question")}
              className="flex items-center gap-x-2 uppercase font-light px-2 py-1 rounded-md bg-blue text-white w-40 justify-between "
            >
              Next
              <BsArrowRight />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SurveyName;
