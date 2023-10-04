const { whiteText, animationBg, mediumPinkBg, mediumBlackText ,darkPinkBg, lightPinkBg, darkBlackText } =
process.env.themeColors; // theme color variables


const Result = (props) => {
  return (
    <div style={{ background: animationBg , overflowY: "scroll" , height: "500px" }} className=" space-y-4  px-4 py-5 ">
      <div
        style={{ background: lightPinkBg }}
        className="s  rounded-lg  p-2 text-t-base  font-pt-sens font-normal"
      >
        <span className=" font-bold">Disclaimer</span> : This is an AI-generated
        report and should not be considered a replacement for advice from a
        qualified medical professional. Always consult with a healthcare
        provider for accurate medical guidance and diagnosis.
      </div>

      <div
        style={{ background: darkPinkBg }}
        className="s  w-auto  p-2 text-t-base  font-pt-sens font-normal"
      >
        <span className=" font-bold"> Lab Ref no. :</span> XXXXXXX12244
      </div>
      <div
        style={{ background: darkPinkBg }}
        className="s  w-auto  p-2 text-t-base  font-pt-sens font-normal"
      >
        Summary
      </div>
      <div className="p-2 rounded-lg bg-slate-950 overflow-hidden">
        <div className=" space-y-3 list-disc list-inside overflow-hidden">
          <div
            style={{ whiteSpace: "pre-line", color: darkBlackText }}
            className="text-t-base  font-pt-sens font-normal"
          >
            {props.summary}
          </div>
        </div>
      </div>

      <div
        style={{ background: darkPinkBg }}
        className="s  w-auto  p-2 text-t-base  font-pt-sens font-normal"
      >
        Treatments Recomendations
      </div>

      <div className="p-2 rounded-lg bg-slate-950 overflow-hidden">
        <div className=" space-y-3 list-disc list-inside overflow-hidden">
          <div
            style={{ whiteSpace: "pre-line", color: darkBlackText }}
            className="text-t-base  font-pt-sens font-normal"
          >
            {/* {props.treatment} */}

            <ul>
              {props.treatment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
