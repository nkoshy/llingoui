"use client";



import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import { Button } from "./ui/button";
import { useState } from "react";

const SubmitResport = ({
  handleFileChange,
  handleFileUpload,
  response,
  files,
  handleRemoveFile,
  selectedLanguagefunc,
}) => {
  // const [lang, setlang] = useState("English");

  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    whiteText,
    animationBg,
    mediumPinkBg,
    mediumBlackText,
    darkPinkBg,
    lightPinkBg,
    extraPink,
  } = process.env.themeColors; // theme color variables

  // function onmouseEnterfunc() {
  //   console.log("seleted language in submitResport .jsx");
  //   setIsButtonDisabled(false);
  // }
  return (
    <div className="space-y-5">
      <div className=" s">
        <h3
          style={{ color: mediumPinkBg }}
          className=" text-t-20 font-red-hat-displat font-bold"
        >
          Submit Laboratory Report
        </h3>
        <p
          style={{ color: lightPinkBg }}
          className=" text-t-base font-semibold text-primary font-red-hat-displat"
        >
         Upload your Lab report, select your preferred language and generate a comprehensive Health Summary 
	 & Treatment recommendations instantly. Let’s get started. {" "}
        </p>
      </div>
      <form onSubmit={handleFileUpload} className=" space-y-4">
        <div className=" flex flex-wrap items-center  gap-6 ">
          <label
            style={{ background: extraPink, textColor: whiteText , cursor: 'pointer' }}
            htmlFor="fileInput"
            className="gap-3 inline-flex   active:bg-opacity-40 items-center justify-center rounded-sm text-base font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[42px] font-pt-sens px-4"
          >
            <FiUpload size={24} /> Upload Health Report
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple={false}
          />

          <select
            style={{ color: extraPink , cursor: 'pointer' }}
            className="flex h-[42px]  items-center justify-between rounded-md !border-2 border-primary bg-background px-3 py-2 text-base ring-offset-background font-normal  !font-pt-sens  focus:outline-none focus:ring-0  disabled:cursor-not-allowed disabled:opacity-50
              "
            onChange={selectedLanguagefunc}
            // onMouseEnter={onmouseEnterfunc}
          >
            <option
              value=""
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
            >
              Language
            </option>

            <option
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="English"
            >
              English
            </option>
            <option
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="Hindi"
            >
              Hindi
            </option>
            <option
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="Spanish"
            >
              Spanish
            </option>
          </select>

          <Button>Submit</Button>
        </div>
        <p className=" text-sm font-normal font-public-sens max-w-[60%] text-red">
          Please ensure the uploaded medical report is in English, in PDF
          format, and is clear.
        </p>
      </form>
      {response && (
        <div className="py-5">
          <p className="text-sm font-normal font-public-sens">
            Server Response:
            {response.success ? (
              <span className="text-green-500">{response.message}</span>
            ) : (
              <span className="text-red-500">{response.message}</span>
            )}
          </p>
        </div>
      )}
      <div className=" pt-10">
        <div
          style={{ color: mediumBlackText, borderColor: extraPink }}
          className=" text-sm pb-1 font-red-hat-displat font-normal border-b border-primary"
        >
          Uploaded Report :
          {files.map((file, index) => (
            <li key={index} className=" inline-flex items-center gap-2">
              {file.name}
            </li>
          ))}
        </div>
        <p
          style={{ color: mediumBlackText }}
          className=" py-4 text-sm  italic font-red-hat-displat font-normal"
        >
          By uploading the report you agree to our{" "}
          <Link style={{ color: darkPinkBg }} href="" className="  font-bold">
            Terms & Conditions{" "}
          </Link>
          and{" "}
          <Link
            style={{ color: darkPinkBg }}
            href=""
            className=" text-primary font-bold"
          >
            Privacy Statement
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubmitResport;
