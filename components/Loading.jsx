"use client";
import loading from "./loading.gif";
import Image from "next/image";

const { darkBlackText, animationBg } = process.env.themeColors;

import { Bars } from "react-loader-spinner";

const Loading = (props) => {
  return (
    <div
      style={{ background: animationBg }}
      className=" grid   h-[26.5rem] place-items-center"
    >
      <div>
        <Bars
          height="80"
          width="80"
          color="#950E4D"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

        {/* <Image src={loading} alt="loading.." /> */}

        <h3
          style={{ color: darkBlackText }}
          className=" text-center py-2 text-t-20 font-medium font-red-hat-displat"
        >
          Analyzing
        </h3>
        <p style={{ color: darkBlackText }} className="text-center">
          {/*props.loadStatus */}
        </p>
      </div>
    </div>
  );
};

export default Loading;
