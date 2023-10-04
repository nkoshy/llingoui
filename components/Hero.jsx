
  // Access the theme colors and logo URL from process.env
  const {  extraPink , darkPinkBg } = process.env.themeColors;


const Hero = () => {
  return (
    <div className=" py-5 container space-y-1">
      <h2 style={{ color: darkPinkBg }} className=" font-red-hat-displat text-center text-t-24 sm:text-t-32 font-bold ">
        TADAWI AI ASSISTANT
      </h2>
      <p  style={{ color: extraPink }} className="  font-red-hat-displat  text-center text-t-base sm:text-t-20 font-bold">
        Simplifying Medical Reports
      </p>
    </div>
  );
};

export default Hero;
