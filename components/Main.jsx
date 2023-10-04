"use client";
import logo from "@/public/Orange tint 1.svg";
// import logo from "@/public/athenia.svg";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import Loading from "./Loading";
import Result from "./Result";
import SubmitResport from "./SubmitResport";

const Main = () => {
  const { whiteText, animationBg, mediumPinkBg, mediumBlackText, lightPinkBg } =
    process.env.themeColors; // theme color variables
  const logoUrl = process.env.logoUrl;
  const logoUrl1 = process.env.logoUrl1;

  const [tenantId, setTenantId] = useState("");
  const [requestId, setRequestId] = useState("");
  const [status, setStatus] = useState("");
  const [results, setResults] = useState("");

  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  // const [pdfContent, setPdfContent] = useState(""); // Add state to store PDF content
  const [showPdfDetails, setShowPdfDetails] = useState(false); // Add state to control content


  const [summary, setsummary] = useState("")
  const [treatment, settreatment] = useState("")




  useEffect(() => {
    // This function will run when the component is mounted (app loaded).
    // Place your code here.

    async function getTenantId() {
      try {
        const response = await fetch(
          "https://llprod.atheniaai.com/gettenantid/"
        );
        const data = await response.json();
        console.log(data);
        setTenantId(data.tenant_id);
      } catch (error) {
        alert(
          "I guess there is a network issue in getting the response from server , press ok to relod the page",
          error
        );
        location.reload();
      }
    }

    getTenantId();
    // If you need to perform cleanup when the component unmounts, return a function:
    return () => {
      // This function will run when the component unmounts.
      // Place your cleanup code here, if necessary.
    };
  }, []); // The empty array [] means this effect runs only once, on mount

  const handleFileChange = (event) => {
    let file = event.target.files[0];
    console.log("file-type", file.type);
    console.log("file size is ", file.size);
    let filesize = file.size;
    // convert 1 MB to bytes
    let limit = 1 * 1000000;

    if (file.type === "application/pdf"  && filesize <= limit) {
      let nameOfFile = event.target.files[0]
      setSelectedFile(event.target.files[0]);
    setFiles([files, nameOfFile]);  //to show uploaded files

    console.log("files that ae uploaded" , files);

    } else if(filesize > limit){

      alert("File size is too large, please upload file less than 1 MB.");

    }
    
    else {
      alert("Only pdf files are supported");
    }

    // Handle the selected file as needed
  };

  function selectedLanguagefunc(event) {
    let l = event.target.value;
    setSelectedLanguage(l);
  }

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (selectedFile && selectedLanguage) {
      console.log("file is present", selectedFile);
      console.log("seletd lenaguage after uploading file", selectedLanguage);

      // ------------------------------
      // show loading after hitting submit
      setShowPdfDetails(true);
      setLoading(true);

      const file = selectedFile;
      console.log("file that is going in body", file);
      const formData = new FormData();
      formData.append("pdf_file", file);
      formData.append("language", selectedLanguage);

      console.log("formdata ", formData);

      try {
        const response = await fetch("https://llprod.atheniaai.com/chat/", {
          method: "POST",
          body: formData,
        });

        let data = await response.json();
        console.log("request id is present in this response", data);
        setRequestId(data.request_id);
        console.log("from usestate variable", requestId);
        console.log(data.request_id);

        const pollInterval = setInterval(async () => {
          const statusResponse = await fetch(
            `https://llprod.atheniaai.com/status/?request_id=${data.request_id}`
          );
          const statusData = await statusResponse.json();

          console.log(statusData);
          console.log(statusData.status);

          setStatus(statusData.status);

          console.log(status);
          setLoading(true);

          if (statusData.status === "completed") {
            setLoading(true);


            const resultsResponse = await fetch(
              `https://llprod.atheniaai.com/results/?request_id=${data.request_id}`
            );
            const resultsData = await resultsResponse.json();
            setResults(resultsData.results);
            console.log(resultsData);
            console.log("resulted ...", resultsData.results);
            console.log(typeof(resultsData.results));

            let arr = resultsData.results.split(/\n/)
            console.log(arr.slice(1,4));
            console.log(arr.slice(7,13));


            setsummary(arr.slice(1,4)[2].trim()) // summary extracted

            settreatment(arr.slice(7,13)); //treatment extracted


            setStatus(" ");//set status to empty string

            setLoading(false);


            clearInterval(pollInterval);
          }
        }, 4000);
      } catch (error) {
        alert(
          "I guess there is a network error , press ok to relod the page",
          error
        );
        location.reload();
      }


      try {
        // setLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 3000)); // Introduce a 5-second delay
        // const responseFromServer = await simulateServerUpload(
        console.log("inside try");
        //   selectedFile,
        //   selectedLanguage
        // );
        // setResponse(responseFromServer);
        // setPdfContent(responseFromServer.pdfContent); // Set PDF content from the server response
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // setLoading(false);
        // setFiles([...files, selectedFile]);  //to show uploaded files
        // setSelectedFile(null);
        // console.log("finally always run, ");
      }

      
    } else {
      if (!selectedFile) {
        alert("File is not selected");
      } else {
        alert("Language is not selected");
      }
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="container space-y-5  lg:space-y-0 ">
      <div className=" grid  grid-cols-11 gap-6">
        <div className=" col-span-11 lg:col-span-5">
          <SubmitResport
            handleFileChange={handleFileChange}
            files={files}
            handleFileUpload={handleFileUpload}
            response={response}
            handleRemoveFile={handleRemoveFile}
            selectedLanguagefunc={selectedLanguagefunc}
          />
        </div>
        <div className="w-full col-span-11 lg:col-span-6">
          <div className="l">
            <div className="flex items-center justify-end gap-5">
              <button style={{ color: mediumBlackText }}  className="text-t-base font-pt-sens font-bold underline underline-offset-2 inline-flex items-center gap-2">
                <FiDownload   className="text-t-20" />
                Download
              </button>
            </div>
            <div style={{ borderColor: lightPinkBg }} className="py-4 border-l pl-5  ">
              <div
                style={{ background: mediumPinkBg }}
                className="px-4  flex items-center justify-between rounded-t-md py-4"
              >
                <h3
                  style={{ textColor: whiteText }}
                  className="text-t-base font-pt-sens font-bold "
                >
                  Preview
                </h3>
              </div>
              {loading ? (
                <Loading loadStatus={status} />
              ) : showPdfDetails ? (
                <Result result={results}  summary = {summary}  treatment={treatment} />
              ) : (
                <div
                  style={{ background: animationBg }}
                  className=" grid place-items-center  space-y-4  px-4 py-10 text-primary font-medium text-2xl text-center"
                >
                  <h3 style={{ color: mediumPinkBg  }}> Please Upload PDF</h3>
                </div>
              )}
              <div
                style={{ background: mediumPinkBg }}
                className="px-4  flex items-center justify-end rounded-b-md py-4"
              >
                <div className="inline-flex items-center gap-3">
                  <h3
                    style={{ textColor: whiteText }}
                    className="text-t-base font-pt-sens font-bold "
                  >
                    Powered by
                  </h3>
                  <Image src={logoUrl1} alt="logo" width="46" height="39" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
